from ast import Try
from django.shortcuts import render, HttpResponse
from .models import image_logger
from .serializers import ImageInfoSerializer
from rest_framework.response import Response
from rest_framework import viewsets


class ImageInfo(viewsets.ModelViewSet):
    def list(self, request):
        queryset = image_logger.objects.all()
        serializer = ImageInfoSerializer(queryset, many=True)
        return Response(serializer.data)
