from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from django.urls import include

from imageloggerapp import views

from rest_framework.routers import DefaultRouter
from .views import ImageList

from imageloggerapp import urls
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('',  views.post_list),
    path('loadfile/', views.load_files, name='loadfile')
]
