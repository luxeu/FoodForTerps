import bs4 as bs
import urllib.request
from urllib.error import URLError, HTTPError
from pymongo import MongoClient

url = "https://nutrition.umd.edu/?locationNum=51&dtdate=4/13/2025"
general_sauce =urllib.request.urlopen(url).read()
general_soup = bs.BeautifulSoup(general_sauce, 'lxml')
client = MongoClient("mongodb+srv://syang8:tI39ghVdmISktK8U@cluster.gzowamk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
db = client['FoodForTerps']
users_collection = db['Nutrition']
delete_result = users_collection.delete_many({})
for url in general_soup.find_all('a'):
    if "label." in url['href']:
        try:
            # foodUrl = "https://nutrition.umd.edu/label.aspx?RecNumAndPort=150942*3"
            foodUrl = "https://nutrition.umd.edu/" + url.get('href').split()[0]
            sauce =urllib.request.urlopen(foodUrl).read()
            soup = bs.BeautifulSoup(sauce, 'lxml')

            name = soup.title.get_text()
            print(name)

            div = soup.find_all(class_= 'nutfactstopnutrient')

            total_fat = int(float(div[0].get_text().split()[-1][:-1]))
            total_carbs = int(float(div[2].get_text().split()[-1][:-1]))
            total_carbs_daily = int(float(div[3].get_text().split()[-1][:-1]))
            fats = int(float(div[4].get_text().split()[-1][:-1]))
            fiber = int(float(div[6].get_text().split()[-1][:-1]))
            total_sugars = int(float(div[10].get_text().split()[-1][:-1]))  #total Carbs daily percent
            cholesterol = int(float(div[12].get_text().split()[-1][:-2]))
            sodium = int(float(div[16].get_text().split()[-1][:-2]))
            sodium_daily = int(float(div[17].get_text().split()[-1][:-1]))
            protein = int(float(div[18].get_text().split()[-1][:-1]))

            food_group = ""
            if fats >=15:
                food_group = "Fats"
            elif protein >=20:
                food_group = "Protein"
            elif total_carbs >=50:
                food_group = "Grain"
            elif fiber >=2 and sodium <=3:
                food_group = "Fruits"
            elif total_carbs >=15 and sodium>=15:
                food_group = "Grain"
            elif protein >=10:
                food_group = "Protein"
            elif fats >=10:
                food_group = "Fats"
            elif fiber <=1:
                food_group = "Grain"
            else:
                food_group = "Fruits"
                        # protien_daily = div[19].get_text().split()[-1]

                        # print(protien_daily)

                        # print(total_fat)
                        # print(total_carbs)
                        # print(total_carbs_daily)
                        # print(total_sugars)
                        # print(cholesterol)
                        # print(sodium)
                        # print(sodium_daily)
                        # print(protien)
                        # print(food_group)

            # client = MongoClient("mongodb+srv://syang8:tI39ghVdmISktK8U@cluster.gzowamk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
            # db = client['FoodForTerps']
            # users_collection = db['Nutrition']
            # delete_result = users_collection.delete_many({})
            registered_nutrition = {
                "name": name,
                "food_group": food_group,
                "nutrition": {
                    "total_fat": total_fat,
                    "total_carbs": total_carbs,
                    "total_carbs_daily": total_carbs_daily,
                    "total_sugars": total_sugars,
                    "cholesterol": cholesterol,
                    "sodium": sodium,
                    "sodium_daily": sodium_daily,
                    "protein": protein
                }
            }

            users_collection.insert_one(registered_nutrition)
        except (HTTPError, URLError) as e:
            continue
        except IndexError as e:
            continue
        except Exception as e:
            continue