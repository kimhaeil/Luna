from calendar import Calendar
from pydoc import classname
from django.db import models

# Create your models here.

class Stores(models.Model):
    store_id: models.AutoField(primary_key=True)
    store_name: models.CharField(max_length=255)
    phone: models.CharField(max_length=25)
    email: models.CharField(max_length=255)
    street: models.CharField(max_length=255)
    city: models.CharField(max_length=255)
    state: models.CharField(max_length=10)
    zip_code: models.CharField(max_length=5)

    def __str__(self):
        return self.store_id



