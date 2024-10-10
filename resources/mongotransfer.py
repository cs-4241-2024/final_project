import pymongo, csv

mongoURI = ""
mongoClient = pymongo.MongoClient(mongoURI)
mongoDatabase = mongoClient["stockroom-database"]
mongoCollecton = mongoDatabase["inventory"]

with open('Stockroom Inventory.csv') as file:

  reader = csv.reader(file)

  next(reader)

  count = 0
  for row in reader:
    item = {
      "name": row[0],
      "quantity": row[1],
      "unit": row[2],
      "location": row[3],
      "price": row[4],
      "lastupdated": row[5],
      "notes": row[6]
    }

    mongoCollecton.insert_one(item)

    count += 1
    print(f"Inserting: {count}", end="\r")
  
  print(f"Transfer complete! Inserted {count} items.")