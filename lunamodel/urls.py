from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from lunamodel import views

urlpatterns = [
    path('selectStores/', views.getStores),
    path('selectPouchList/', views.getInspectionPouchList),
    path('tryLogin/', views.login)
]
