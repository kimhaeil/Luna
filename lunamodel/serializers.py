from unittest.util import _MAX_LENGTH
from rest_framework import serializers


class StoresSerializer(serializers.Serializer):
    #모델ORM 사용 없이 시리얼 라이즈#
    store_id = serializers.IntegerField()
    store_name = serializers.CharField()
    phone = serializers.CharField()
    email = serializers.CharField()
    street = serializers.CharField()
    city = serializers.CharField()
    state = serializers.CharField()
    zip_code = serializers.CharField()
