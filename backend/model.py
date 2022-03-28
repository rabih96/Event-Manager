from pydantic import BaseModel
from datetime import date, datetime

class Event(BaseModel):
    title: str
    description: str
    start_date: datetime
    end_date: datetime
