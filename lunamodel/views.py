
from urllib import response
from django import views
from django.http import HttpResponse
from django.shortcuts import render
from django.db import connection
import json
from django.http import JsonResponse

from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
# Create your views here.
from rest_framework.renderers import JSONRenderer

from .StoreSerializer import StoreSerializer
from rest_framework import views
from .models import Stores

@api_view(["GET"])
@csrf_exempt
def getStore(request):
    all_Stores = Stores.objects.all()
    print(all_Stores)
    return Response(all_Stores)
 
# def getStores(request):
#     if request.method == 'GET':
#         store = Stores.objects.all()
#         print(store)
#         store_serializer = StoreSerializer(store, many=True)
#         return JsonResponse(store_serializer.data, safe=False)
#     elif request.method == 'POST':
#         store_data = JSONParser().parse(request)
#         store_serializer = StoreSerializer(data=store_data)
#         if StoreSerializer.is_valid():
#             StoreSerializer.save()
#             return JsonResponse("Added", safe=False)
#         return JsonResponse("Failed", safe=False)

        # with connection.cursor() as cursor:
        #     cursor.execute(
        #         "SELECT * FROM [BikeStores].[sales].[stores]")
        #     stores = cursor.fetchall()
        #     result= []
        #     keys = ('store_id', 'store_name', 'phone', 'email', 'street', 'city', 'state', 'zip_code',)
        #     for item in stores:
        #         result.append(dict(zip(keys,item)))
        #     json_data = json.dumps(result)
        # return HttpResponse(stores, content_type="application/json")
