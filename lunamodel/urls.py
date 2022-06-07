from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from lunamodel import views

urlpatterns = [
<<<<<<< HEAD
    path('select/', views.getStores)
=======
    path('select/', views.getInspectionPouchList)
>>>>>>> 4dd1171be7e9f4c668457164260cd82af2d18121
]
