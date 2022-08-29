from ast import Try
from django.shortcuts import render, HttpResponse
from imageloggerapp.models import image_logger


def img_info(request):
    for e in image_logger.objects.all():
        print(e)
    return HttpResponse('Return')
