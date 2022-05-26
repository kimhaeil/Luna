from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from lunamodel.models import Stores

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Stores
        field=('store_id', 'store_name','phone', 'email', 'street', 'city', 'state', 'zip_code',)