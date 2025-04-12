import pymongo
import json
from pymongo import MongoClient, InsertOne

client = pymongo.MongoClient("COLLECTIONS STRING")
db = client.main
collection = db.menus
requesting = []

with open(r"<FILENAME>") as f:
    for jsonObj in f:
        myDict = json.loads(jsonObj)
        requesting.append(InsertOne(myDict))

result = collection.bulk_write(requesting)
client.close()

# python json_to_mongo.py
