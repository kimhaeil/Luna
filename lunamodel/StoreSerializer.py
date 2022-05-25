from rest_framework import serializers

class StoreSerializer(serializers.Serializer):
    store_id= serializers.IntegerField()