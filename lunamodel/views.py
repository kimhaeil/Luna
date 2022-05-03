from django.http import HttpResponse
from django.shortcuts import render
from django.db import connection
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


def getStores():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM [BikeStores].[sales].[stores]")
        row = cursor.fetchall()
        return row


def index(request):
    lista = []
    stores = getStores()

    for store in stores:
        print(store)
        lista.append(store)

    content = '''
        <h1>stores</h1>
        <ol>
            {% for row in lista %}
            <li>{{ row.0 }}</li>
            {% endfor %}
        </ol>
    '''
    return HttpResponse(content)
