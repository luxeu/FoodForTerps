from bs4 import BeautifulSoup
import urllib.request
from datetime import date
from pymongo import MongoClient


## Connect to MongoDB
mongoURL = "mongodb+srv://syang8:tI39ghVdmISktK8U@cluster.gzowamk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
client= MongoClient(mongoURL)
db = client["FoodForTerps"]
users_collection = db["General"]

def list_menu(meal_time):
    cards = meal_time.find_all("div", {"class": "card-body"})
    for child in cards:
        location = child.find("h5", {"class": "card-title"})
        print(location.string)
        menu_items = child.find_all("div", {"class": "row menu-item-row"})
        for item in menu_items:
            dairy, egg, fish, gluten, nuts, sesame, shellfish, soy, halal, local, smart, vegan, vegetarian = False, False, False, False, False, False, False, False, False, False, False, False, False

            name = item.find("a", {"class": "menu-item-name"})
            print(name.string)
            # record allergen/diet tags
            diet_tags = item.findAll("img", {"class": "nutri-icon"})

            for tag in diet_tags:   # TODO find title for each icon
                tag_type = tag["title"]
                if tag_type  == "dairy":
                    dairy = True
                elif tag_type == "egg":
                    egg = True
                elif tag_type == "fish":
                    fish = True
                elif tag_type == "gluten":
                    gluten = True
                elif tag_type == "nuts":
                    nuts = True
                elif tag_type == "sesame":
                    sesame = True
                elif tag_type == "shellfish":
                    shellfish = True
                elif tag_type == "soy":
                    soy = True
                elif tag_type == "halal":
                    halal = True
                elif tag_type == "local":
                    local = True
                elif tag_type == "smart":
                    smart = True
                elif tag_type == "vegan":
                    vegan = True
                elif tag_type == "vegetarian":
                    vegetarian = True

            registered_general = {
                "name": name.string,
                "hall": "South",
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

            users_collection.insert_one(registered_general)



## Initializing values

today = date.today()
weekend = (today.weekday() > 4)
dining_hall = 19 # TODO get location id for url
url = "https://nutrition.umd.edu/?locationNum={location}&dtdate={month:02d}/{day:02d}/{year:0004d}".format(location=dining_hall,month=today.month,day=today.day,year=today.year)
webpage = urllib.request.urlopen(url)
## Parse webpage into soup
webpage_soup = BeautifulSoup(webpage, "html.parser")

# TODO different handling for date. Weekend has brunch and dinner while weekdays have breakfast lunch and dinner
## Get body
body = webpage_soup.body
# Get panes for each mealtime
if weekend:
    brunch = body.find("div", {"id":"pane-1"})
    dinner = body.find("div", {"id":"pane-2"})  
    list_menu(brunch)
    list_menu(dinner) 
else:
    breakfast = body.find("div", {"id":"pane-1"})
    lunch = body.find("div", {"id":"pane-2"})
    dinner = body.find("div", {"id":"pane-3"})
    list_menu(breakfast)
    list_menu(lunch)
    list_menu(dinner)



