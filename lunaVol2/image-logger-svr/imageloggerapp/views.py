from ast import Try
from django.shortcuts import render, HttpResponse
from .models import ImageInfoModel
from .serializers import ImageInfoSerializer
from rest_framework.response import Response
from rest_framework import viewsets

from rest_framework.views import APIView
from django.http import Http404


class ImageList(APIView):
    def get(self, request):
        images = ImageInfoModel.objects.all()
        print(images)
        serializer = ImageInfoSerializer(images, many=True)
        return Response(serializer.data)
