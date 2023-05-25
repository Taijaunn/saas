#!/bin/sh

echo "[entrypoint.sh] Collect static"
python manage.py collectstatic --noinput

echo "[entrypoint.sh] Apply migrations"
python manage.py makemigrations --noinput
python manage.py migrate --noinput

echo "[entrypoint.sh] Start the server"
python manage.py runserver
