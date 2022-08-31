from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from django.urls import include

from imageloggerapp import views

from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'imageFileList', views.ImageInfo)

urlpatterns = [
    path('', include(router.urls))
]
