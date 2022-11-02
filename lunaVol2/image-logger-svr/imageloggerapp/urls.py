from unicodedata import name
from django.urls import path
from imageloggerapp.views import (HomePageView, DefaultFormSetView)


urlpatterns = [
    path('', HomePageView.as_view(), name="home" ),
    path('formset', DefaultFormSetView.as_view(), name="formset_default")
]
