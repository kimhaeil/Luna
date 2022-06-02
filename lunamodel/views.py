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
import json 


@api_view(['GET', 'POST'])
@csrf_exempt
def getStores(request):
    if request.method == 'GET':
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM [BikeStores].[sales].[stores]")
            rows = cursor.fetchall()
            result = []
            keys = ('store_id', 'store_name', 'phone', 'email', 'street', 'city', 'state', 'zip_code')
            for row in rows:
                result.append(dict(zip(keys,row)))
            resultJson = json.dumps(result)
        return HttpResponse(resultJson, content_type="application/json")
