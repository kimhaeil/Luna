from ast import Try
from django.shortcuts import render, HttpResponse
from imageloggerapp.models import image_loagger


def img_info(request):
    try:
        file_name = image_loagger.objects.all()
    except image_loagger.DoesNotExist:
        file_name = None

    print(file_name)
    return HttpResponse(file_name)
