import bs4 as bs
import urllib.request
from pymongo import MongoClient


sauce =urllib.request.urlopen('https://nutrition.umd.edu/label.aspx?RecNumAndPort=119360*1').read()
soup = bs.BeautifulSoup(sauce, 'lxml')

name = soup.title.get_text().split()[-1]

div = soup.find_all(class_= 'nutfactstopnutrient')

total_fat = div[0].get_text().split()[-1]
total_carbs = div[1].get_text()
total_carbs_daily = div[2].get_text().split()[-1]
total_sugars = div[3].get_text().split()[-1]  #total Carbs daily percent
cholesterol = div[10].get_text().split()[-1]
sodium = div[12].get_text().split()[-1]
sodium_daily = div[16].get_text().split()[-1]
protien = div[17].get_text().split()[-1]
protien_daily = div[18].get_text().split()[-1]


client = MongoClient("mongodb+srv://syang8:tI39ghVdmISktK8U@cluster.gzowamk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
db = client['FoodForTerps']
users_collection = db['Nutrition']

registered_nutrition = {
    "name": name,
    "nutrition": {
        "total_fat": total_fat,
        "total_carbs": total_carbs,
        "total_carbs_daily": total_carbs_daily,
        "total_sugars": total_sugars,
        "cholesterol": cholesterol,
        "sodium": sodium,
        "sodium_daily": sodium_daily,
        "protein": protien
    }
}

users_collection.insert_one(registered_nutrition)



# print(total_fat)  #Total fat
# print(total_carbs)   #Total Carbs
# print(total_carbs_daily)
# print(total_sugars)
# print(cholesterol)
# print(sodium)
# print(sodium_daily)
# print(protien)
# print(protien_daily)
