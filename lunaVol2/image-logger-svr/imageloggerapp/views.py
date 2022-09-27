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

    file_ = open(os.path.join(settings.BASE_DIR, 'test.txt'))
    print(file_.name)
    f = open(file_.name, 'r')
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    return render(request, 'imageloggerapp/log_list.html', {
        'post_list': contents
    })

class LineChartJSONView(BaseLineChartView):
    def get_labels(self):
        """Return 7 labels for the x-axis."""
        return ["January", "February", "March", "April", "May", "June", "July"]

    def get_providers(self):
        """Return names of datasets."""
        return ["Central", "Eastside", "Westside"]

    def get_data(self):
        """Return 3 datasets to plot."""

        return [[75, 44, 92, 11, 44, 95, 35],
                [41, 92, 18, 3, 73, 87, 92],
                [87, 21, 94, 3, 90, 13, 65]]

                
line_chart = TemplateView.as_view(template_name='imageloggerapp/chart_list.html')
line_chart_json = LineChartJSONView.as_view()
 
