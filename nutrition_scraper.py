import bs4 as bs
import urllib.request

sauce =urllib.request.urlopen('https://nutrition.umd.edu/label.aspx?RecNumAndPort=119360*1').read()
soup = bs.BeautifulSoup(sauce, 'lxml')


div = soup.find_all(class_= 'nutfactstopnutrient')
print(div[0].get_text().split()[-1])


total_fat = div[1].get_text()
total_carbs = div[2].get_text().split()[-1]
total_carbs_daily = div[3].get_text().split()[-1]  #total Carbs daily percent
total_sugars = div[10].get_text().split()[-1]
cholesterol = div[12].get_text().split()[-1]
sodium = div[16].get_text().split()[-1]
sodium_daily = div[17].get_text().split()[-1]
protien = div[18].get_text().split()[-1]
print(total_fat)  #Total fat
print(total_carbs)   #Total Carbs
print(total_carbs_daily)
print(total_sugars)
print(cholesterol)
print(sodium)
print(sodium_daily)
print(protien)
