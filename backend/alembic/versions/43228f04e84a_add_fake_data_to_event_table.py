"""Add fake data to event table

Revision ID: 43228f04e84a
Revises: 18b45ff794b1
Create Date: 2022-03-25 00:10:16.351219

"""
from alembic import op
import sqlalchemy as sa
from datetime import date

# revision identifiers, used by Alembic.
revision = '43228f04e84a'
down_revision = '18b45ff794b1'
branch_labels = None
depends_on = None


def upgrade():
    metadata = sa.MetaData(bind=op.get_bind())
    metadata.reflect()

    event_table = metadata.tables["event"]

    op.bulk_insert(
        event_table,
        [
            {
                "title": "Concert 1",
                "description": "Description of concert 1",
                "start_date": date.fromisoformat("2022-02-02"),
                "end_date": date.fromisoformat("2022-02-22"),
            },
            {
                "title": "Concert 2",
                "description": "Description of concert 2",
                "start_date": date.fromisoformat("2022-02-02"),
                "end_date": date.fromisoformat("2022-02-22"),
            },
            {
                "title": "Concert 3",
                "description": "Description of concert 3",
                "start_date": date.fromisoformat("2022-02-02"),
                "end_date": date.fromisoformat("2022-02-22"),
            }
        ],
    )


def downgrade():
    pass
