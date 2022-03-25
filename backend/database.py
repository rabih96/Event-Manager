import sqlalchemy as db
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = db.create_engine('sqlite:///data/db.sqlite')
connection = engine.connect()
metadata = db.MetaData()
event = db.Table('event', metadata, autoload=True, autoload_with=engine)

async def fetch_all_events():
    query = db.select([event])
    return connection.execute(query).fetchall()

# async def create_event(event):
#     document = event
#     result = await collection.insert_one(document)
#     return document

# async def remove_event(title):
#     await collection.delete_one({"title": title})
#     return True
