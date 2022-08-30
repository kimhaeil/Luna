from ast import Try
from django.shortcuts import render, HttpResponse
from .models import image_logger


def img_info(request):
    files = image_logger.objects.all()
    len(files)
    return HttpResponse('Return')
