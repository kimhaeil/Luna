from msilib.schema import Class
from django.shortcuts import render, HttpResponse
from django.views.generic.base import TemplateView
from django.views.generic import FormView


from django.conf import settings

import os
import json
from os.path import exists
import pathlib

from django.core.files.storage import FileSystemStorage
from sqlalchemy import false

from imageloggerapp.forms import ContactForm, ContactFormSet


def readfile(request, file):
    print(file)
    file_ = open(os.path.join(settings.FILE_URL, file))
    print(file_)
    f = open(file_.name, 'r')
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    return HttpResponse()

def load_files(request):
    if request.method  == 'POST' and request.FILES['loadfile']:
        loadfile = request.FILES['loadfile']
        fs = FileSystemStorage()
        file_exists = exists(loadfile.name)
        file_url = fs.url(loadfile.name)
        print(file_url)
        if file_exists == false:
            file = fs.save(loadfile.name, loadfile)
        
        read_file(pathlib.Path(loadfile.name).parent.resolve(), loadfile.name)
        return HttpResponse()
    
def read_file(location, file_name):
    path = os.path.join(location, file_name)
    print(path)
    f = open(path, 'r')
    line = f.readline()
    print(line)
    f.close()


class HomePageView(TemplateView):
    template_name = "imageloggerapp/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class DefaultFormSetView(FormView):
    template_name = "imageloggerapp/formset.html"
    form_class = ContactFormSet

class DefaultFormView(FormView):
    template_name = "imageloggerapp/form.html"
    form_class = ContactForm
