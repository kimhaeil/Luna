from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from django.urls import include

from imageloggerapp import views

from rest_framework.routers import DefaultRouter

from imageloggerapp import urls

urlpatterns = [
    path('loadfile/', views.load_files, name='loadfile')
]
