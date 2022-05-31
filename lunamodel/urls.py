from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from lunamodel import views

urlpatterns = [
    path('select/', views.getStore)
]
