clean:
	rm -fr data

data:
	mkdir data

install:
	poetry install

run-alembic: install data
	poetry run alembic upgrade head

run-app: run-alembic
	poetry run hypercorn main:app --reload
