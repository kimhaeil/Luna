from unicodedata import name
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('<int:question_id>', views.detail, name='detail'),
    path('answer/create/<int:question_id>/', views.an)
]
