from dataclasses import field
import email
from pyexpat import model
from rest_framework import serializers
from lunamodel.models import Stores

class StoreSerializer(serializers.Serializer):
    store_id = serializers.IntegerField()
    store_name = serializers.CharField()
    phone = serializers.CharField()
    email = serializers.CharField()
    street = serializers.CharField()
    city = serializers.CharField()
    state = serializers.CharField()
    zip_code = serializers.CharField()