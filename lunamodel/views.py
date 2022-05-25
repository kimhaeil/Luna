from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
from django.db import connection
import json
from django.http import JsonResponse

from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
# Create your views here.
from rest_framework.renderers import JSONRenderer

from .StoreSerializer import StoreSerializer

def MainView(articleTag, id=None):

    return f'''
    <html>`
    <body>
        <h1><a href="/">Django</a></h1>
        {articleTag}
    </body>
    </html>
    '''


@api_view(['GET', 'POST'])
@csrf_exempt
def getStores(request):
    if request.method == 'GET':
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM [BikeStores].[sales].[stores]")
            stores = cursor.fetchall()
            result= []
            keys = ('store_id', 'store_name', 'phone', 'email', 'street', 'city', 'state', 'zip_code',)
            for item in stores:
                result.append(dict(zip(keys,item)))
            json_data = json.dumps(result)
        return HttpResponse(stores, content_type="application/json")
