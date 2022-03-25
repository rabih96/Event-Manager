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

async def create_new_event(new_event):
    query = db.insert(event).values(title = new_event.title, description = new_event.description, start_date = new_event.start_date, end_date = new_event.end_date)
    return connection.execute(query)

async def remove_event(event_id):
    query = db.delete(event).where(event.columns.id == event_id)
    return connection.execute(query)
