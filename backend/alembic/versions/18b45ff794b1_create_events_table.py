"""Create Events table

Revision ID: 18b45ff794b1
Revises:
Create Date: 2022-03-24 22:10:15.795456

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '18b45ff794b1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'event',
        sa.Column(
            "id", sa.Integer, sa.Identity(always=True), nullable=False, primary_key=True
        ),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.current_timestamp(),
            nullable=False,
        ),
        sa.Column('title', sa.String, nullable=False),
        sa.Column('description', sa.String, nullable=False),
        sa.Column(
            "start_date",
            sa.DateTime(timezone=True),
            nullable=False,
        ),sa.Column(
            "end_date",
            sa.DateTime(timezone=True),
            nullable=False,
        ),
    )


def downgrade():
    op.drop_table('event')
