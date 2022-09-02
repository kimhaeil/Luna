from dataclasses import field, fields
from rest_framework import serializers
from .models import ImageInfoModel


class ImageInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ImageInfoModel
        fields = ['id', 'file_name', 'file_path', 'reg_date']
