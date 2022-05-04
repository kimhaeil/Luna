from django.http import HttpResponse
from django.shortcuts import render
from django.db import connection
import json
from django.http import JsonResponse
from django.core import serializers
# Create your views here.


def MainView(articleTag, id=None):

    return f'''
    <html>`
    <body>
        <h1><a href="/">Django</a></h1>
        {articleTag}
    </body>
    </html>
    '''


def getStores(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM [BikeStores].[sales].[stores]")
        row = cursor.fetchall()
        return JsonResponse(row, safe=False, json_dumps_params={'ensure_ascii': False})
