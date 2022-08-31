from dataclasses import field, fields
from rest_framework import serializers
from .models import image_logger


class ImageInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = image_logger
        fields = ['id', 'file_name', 'file_path', 'reg_date']
