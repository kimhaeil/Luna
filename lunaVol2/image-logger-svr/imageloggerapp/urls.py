from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from django.urls import include

from imageloggerapp import views

from rest_framework.routers import DefaultRouter
from .views import ImageList

from imageloggerapp import urls
from rest_framework.urlpatterns import format_suffix_patterns
from .views import line_chart, line_chart_json

urlpatterns = [
    path('',  views.post_list),
    path('chart', line_chart, name='line_chart'),
    path('chartJSON', line_chart_json, name='line_chart_json'),
]
