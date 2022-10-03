from ast import Try
from distutils.text_file import TextFile
from django.shortcuts import render, HttpResponse
from .models import ImageInfoModel
from .serializers import ImageInfoSerializer
from rest_framework.response import Response
from rest_framework import viewsets

from rest_framework.views import APIView

from django.conf import settings
import os
from chartjs.views.lines import BaseLineChartView
from django.views.generic import TemplateView

# 파일 로드
from django.core.files.storage import FileSystemStorage
from .forms import UploadFileForm


class ImageList(APIView):
    def get(self, request):
        images = ImageInfoModel.objects.all()
        print(images)
        serializer = ImageInfoSerializer(images, many=True)
        return Response(serializer.data)


def mainpage(request):
    file_ = open(os.path.join(settings.BASE_DIR, 'test.txt'))
    print(file_.name)
    f = open(file_.name, 'r')
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    return HttpResponse()



def post_list(request):

    chartDataSet = [
    {'ticket_class': 1, 'survived_count': 200, 'not_survived_count': 123},
    {'ticket_class': 2, 'survived_count': 119, 'not_survived_count': 158},
    {'ticket_class': 3, 'survived_count': 181, 'not_survived_count': 528}
    ]

    tableDataSet = [
        {},
        {},
        {},
        {},
        {},
        {}
    ]


    file_ = open(os.path.join(settings.BASE_DIR, 'test.txt'))
    print(file_.name)
    f = open(file_.name, 'r')
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    return render(request, 'imageloggerapp/chart_list.html', {
        'chartDataSet': chartDataSet
    })


def load_files(request):
    if request.method  == 'POST' and request.FILES['loadfile']:
        loadfile = request.FILES['loadfile']
        print(loadfile)
        fs = FileSystemStorage(location='../loadedfiles/')
        filename = fs.save(loadfile.name, loadfile)
    return HttpResponse()
