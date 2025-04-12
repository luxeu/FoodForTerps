import bs4 as bs
import urllib.request
from urllib.error import URLError, HTTPError
from pymongo import MongoClient

url = "https://nutrition.umd.edu/?locationNum=51&dtdate=4/13/2025"
general_sauce =urllib.request.urlopen(url).read()
general_soup = bs.BeautifulSoup(general_sauce, 'lxml')
for url in general_soup.find_all('a'):
    if "label." in url['href']:
        try:
            foodUrl = "https://nutrition.umd.edu/" + url.get('href').split()[0]
            sauce =urllib.request.urlopen(foodUrl).read()
            soup = bs.BeautifulSoup(sauce, 'lxml')

            name = soup.title.get_text()

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
        except (HTTPError, URLError) as e:
            print(f"URL error for {foodUrl}: {e}")
            continue
        except IndexError as e:
            print(f"Parsing error (not enough divs) for {foodUrl}: {e}")
            continue
        except Exception as e:
            print(f"Unexpected error for {foodUrl}: {e}")
            continue