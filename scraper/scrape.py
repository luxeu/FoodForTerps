from bs4 import BeautifulSoup
import urllib.request
from datetime import date
from pymongo import MongoClient
import json
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))

db_uri = os.environ.get('DB_URI')


## Scrapes given "pane-X" div and returns list of food objects that contain name, location in dining hall, and diet tags
def list_menu(meal_time) -> list:
    foodlist = []

    ## Locations are organized by "cards" which contain "row menu-item-row" divs that contain name of food and diet tags
    cards = meal_time.find_all("div", {"class": "card-body"})
    for child in cards:
        location = child.find("h5", {"class": "card-title"})
        # print(location.string)
        menu_items = child.find_all("div", {"class": "row menu-item-row"})
        for item in menu_items:
            ## Egregious
            ## Later: refactor to a dictionary? is that necessary?
            dairy, egg, fish, gluten, nuts, sesame, shellfish, soy, halal, local, smart, vegan, vegetarian = False, False, False, False, False, False, False, False, False, False, False, False, False

            ## foodname stored in a tag with class "menu-item-name"
            name = item.find("a", {"class": "menu-item-name"})
            # print(name.string)

            ## diet icons are of class "nutri-icon" we will use this to get all diet tags associated with a food
            diet_tags = item.find_all("img", {"class": "nutri-icon"})

            for tag in diet_tags:
                ## Tick off what tags are associated
                tag_type = tag["title"]
                # print(tag_type)
                if tag_type  == "Contains dairy":
                    dairy = True
                elif tag_type == "Contains egg":
                    egg = True
                elif tag_type == "Contains fish":
                    fish = True
                elif tag_type == "Contains gluten":
                    gluten = True
                elif tag_type == "Contains nuts":
                    nuts = True
                elif tag_type == "Contains sesame":
                    sesame = True
                elif tag_type == "shellfish":
                    shellfish = True
                elif tag_type == "Contains soy":
                    soy = True
                elif tag_type == "HalalFriendy":
                    halal = True
                elif tag_type == "LocallyGrown":
                    local = True
                elif tag_type == "smartchoice":
                    smart = True
                elif tag_type == "vegan":
                    vegan = True
                elif tag_type == "vegetarian":
                    vegetarian = True

            ## Build food object and append to foodlist
            registered_food = {
                "name": name.string,
                "location": location.string,
                "dairy": dairy,
                "egg": egg,
                "fish": fish,
                "gluten": gluten,
                "nuts": nuts,
                "sesame": sesame,
                "shellfish": shellfish,
                "soy": soy,
                "halal": halal,
                "local": local,
                "smart": smart,
                "vegan": vegan,
                "vegetarian": vegetarian,
            }
            foodlist.append(registered_food)

    return foodlist


## default to scraping yahentamitsi dining menu
def main(dining_hall_ID: int = 19):
    ## Connect to MongoDB
    mongoURL = db_uri

    client= MongoClient(mongoURL)
    db = client["FoodForTerps"]
    users_collection = db["General"]
    print("Connected to Mongo creating General Collection")

    
    print("Dropping existing collection")
    delete_result = users_collection.delete_many({})
    print("Dropped Collection")

    ## Record date
    print("Retrieving Date")
    today = date.today()
    weekend = (today.weekday() > 4)
    print("Retrieved Date")

    ## Specify dining hall
    print("Retrieving Dining Hall")
    dining_hall = dining_hall_ID
    hallname = "unknown_hall"
    if dining_hall == 16:
        hallname = "South Campus"
    elif dining_hall == 19:
        hallname = "Yahentamitsi"
    elif dining_hall == 51:
        hallname = "251 North"

    print("Retrieved Dining Hall: " + hallname + "")

    ## Initialize mealtime lists
    breakfast_list = []
    lunch_list = []
    dinner_list = []

    ## Build URL and grab html document
    print("Building URL")
    url = "https://nutrition.umd.edu/?locationNum={location}&dtdate={month:02d}/{day:02d}/{year:0004d}".format(
        location=dining_hall,
        month=today.month,
        day=today.day,
        year=today.year)
    print("Accessing HTML")
    webpage = urllib.request.urlopen(url)
    print("Accessed HTML" if webpage != None else "Failed!")

    ## Parse webpage into soup
    print("Parsing to Soup")
    webpage_soup = BeautifulSoup(webpage, "html.parser")
    body = webpage_soup.body
    
    ## Scraping food info for each mealtime and place them in their own list
    ## Weekends only have brunch and dinner (will treat as lunch and dinner). Weekdays have Breakfast Lunch and Dinner
    print("Preparing to scrape")
    if weekend:
        print("Today is the weekend! Scraping lunch and dinner")
        lunch = body.find("div", {"id":"pane-1"})
        dinner = body.find("div", {"id":"pane-2"})  
        lunch_list = list_menu(lunch)
        dinner_list = list_menu(dinner) 
    else:
        print("Today is a weekday! Scraping breakfast, lunch, and dinner")
        breakfast = body.find("div", {"id":"pane-1"})
        lunch = body.find("div", {"id":"pane-2"})
        dinner = body.find("div", {"id":"pane-3"})
        breakfast_list = list_menu(breakfast)
        lunch_list = list_menu(lunch)
        dinner_list = list_menu(dinner)

    ## build object to push to MongoDB
    print("Building hall object to push")
    registered_hall = {
        "name" : hallname,
        "breakfast_list" : breakfast_list,
        "lunch_list": lunch_list,
        "dinner_list": dinner_list
    }
    print("Object Built:")
    print(json.dumps(registered_hall))

    print("Pushing Hall object to MongoDB")
    users_collection.insert_one(registered_hall)
    print ("Exiting")

if __name__ == '__main__' :
    mongoURL = db_uri
    client= MongoClient(mongoURL)
    db = client["FoodForTerps"]
    users_collection = db["General"]
    print("Dropping existing collection")
    delete_result = users_collection.delete_many({})
    print("Dropped Collection")
    # print(delete_result)
    main()
    main(16)
    main(51)
