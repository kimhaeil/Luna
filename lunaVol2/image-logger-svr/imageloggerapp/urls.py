from django.urls import path
from imageloggerapp.views import (HomePageView)


urlpatterns = [
    path('', HomePageView.as_view(), name="home" ),
    paht('form', )
]
