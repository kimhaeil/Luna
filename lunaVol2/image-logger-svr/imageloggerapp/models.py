from django.db import models

# Create your models here.


class image_logger(models.Model):
    file_name = models.CharField(max_length=200)
    file_path = models.CharField(max_length=200)
    reg_date = models.DateField()

    def __str__(self):
        return self.file_name
