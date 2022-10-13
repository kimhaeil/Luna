from django.shortcuts import render, HttpResponse


from django.conf import settings

import os
import json
from os.path import exists

from django.core.files.storage import FileSystemStorage
from sqlalchemy import false


def readfile(request, file):
    print(file)
    file_ = open(os.path.join(settings.FILE_URL, file))
    print(file_)
    f = open(file_.name, 'r')
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    return HttpResponse()

def post_list(request):

    chartDataSet = [
    {'function': 'Packetlist', 'survived_count': 200, 'not_survived_count': 123},
    {'function': 'Inspection data', 'survived_count': 119, 'not_survived_count': 158},
    {'function': 'CheckVIZEN data', 'survived_count': 181, 'not_survived_count': 528}
]      
    
    categories = list()
    survived_series_data = list()
    not_survived_series_data = list()


    for entry in chartDataSet:
        categories.append('%s Class' % entry['function'])
        survived_series_data.append(entry['survived_count'])
        not_survived_series_data.append(entry['not_survived_count'])

    
    survived_series = {
        'name': 'most execuction time(ms)',
        'data': survived_series_data,
        'color': 'green'
    }

    not_survived_series = {
        'name': 'execution avg time(ms)',
        'data': not_survived_series_data,
        'color': 'red'
    }

    chart = {
        'chart': {'type': 'column'},
        'title': {'text': 'execution time by group function'},
        'xAxis': {'categories': categories},
        'series': [survived_series, not_survived_series]
    }
    
    dump = json.dumps(chart)
   
    return render(request, 'imageloggerapp/chart_list.html', {'chart': dump})


def load_files(request):
    if request.method  == 'POST' and request.FILES['loadfile']:
        loadfile = request.FILES['loadfile']
        fs = FileSystemStorage()
        file_exists = exists(loadfile.name)
        if file_exists == false:
            file = fs.save(loadfile.name, loadfile)
        read_file(loadfile.name)
        return HttpResponse()
    
def read_file(path):
    print(path)

