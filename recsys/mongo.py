import pymongo
import pandas as pd
from bson import json_util
import json


def getJobs():
    client = pymongo.MongoClient(
        "mongodb+srv://sahil123:sahil123@cluster0.xhl0k.mongodb.net/test")
    
    db = client['test']
    collection = db["jobs"]
    allDocs = collection.find()
    allDocs = json.loads(json_util.dumps(allDocs))
    # allDocs = json.dumps(allDocs, default=str)
    lst = list(allDocs)
    df = pd.DataFrame(lst)
    return df

# print(getJobs())
