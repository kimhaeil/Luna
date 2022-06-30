from urllib import response
import django
from django.http import HttpResponse
from django.shortcuts import render
from django.db import connection
import json
from django.http import JsonResponse

from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
import json 
from django.core.serializers.json import DjangoJSONEncoder


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
    elif request.method == 'POST':
        print(request);



# @api_view(['GET', 'POST'])
# @csrf_exempt
# def getInspectionPouchList(request):
#     if request.method == 'GET':
#         with connection.cursor() as cursor:
#             cursor.execute(
#                 "SELECT TOP (1000) * FROM inspection_pouch_list")
#             rows = cursor.fetchall()
#             result = []
#             keys = ('inspection_pouch_id', 'inspection_group_id', 'inspection_time', 'pouch_barcode', 'image_file_name', 'state', 'inspection_retry')
#             for row in rows:
#                 result.append(dict(zip(keys,row)))
#             resultJson = json.dumps(result, cls=DjangoJSONEncoder)
#         return HttpResponse(resultJson, content_type="application/json")
