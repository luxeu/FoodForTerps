from bs4 import BeautifulSoup
import urllib.request

## Initializing values
date = "Date" # TODO get date then format for url
dining_hall = 19 # TODO get location id for url
url = "https://nutrition.umd.edu/"
webpage = urllib.request.urlopen(url)
## Parse webpage into soup
webpage_soup = BeautifulSoup(webpage, "html.parser")

## Get cards
body = webpage_soup.body
cards = body.find_all("div", {"class": "card-body"})
# cards = body.find_all("div", {"class": "row menu-item-row"})

for child in cards:
    location = child.find("h5", {"class": "card-title"})
    print(location.string)
    menu_items = child.find_all("div", {"class": "row menu-item-row"})
    for item in menu_items:
        name = item.find("a", {"class": "menu-item-name"})
        print(name.string)
        # record allergen/diet tags
        diet_tags = item.findAll("img", {"class": "nutri-icon"})
        for tag in diet_tags:
            print(tag["title"])

    