from django import forms
from django.forms import BaseFormSet, formset_factory

class ConfigurationForms(forms.Form):
    date = forms.DateField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        raise forms.ValidationError("Error")
        return cleaned_data

class ContactBaseFormSet(ContactBaseFormSet):
    def add_fields(self, form, index):
        super().add_fields(form, index)

    def clean(self):
        super().clean()
        raise forms.ValidationError("Error")

ContactFormSet = formset_factory(ConfigurationForms, formset=ContactBaseFormSet, extra=2, max_num=4, validate_max=True)