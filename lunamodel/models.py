from calendar import Calendar
from pydoc import classname
from django.db import models

# Create your models here.


class Stores(models.Model):
    store_id = models.IntegerField()
    store_name = models.CharField()
    phone = models.CharField()
    email = models.CharField()
    street = models.CharField()
    city = models.CharField()
    state = models.CharField()
    zip_code = models.CharField()
