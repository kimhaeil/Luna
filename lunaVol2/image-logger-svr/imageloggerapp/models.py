from django.db import models

# Create your models here.


class ImageInfoModel(models.Model):
    file_name = models.CharField(max_length=200)
    file_path = models.CharField(max_length=200)
    reg_date = models.DateField()

    def __str__(self):
        return self.file_name

class Question(models.Model):
    subject = models.CharField(max_length=200)
    contents = models.TextField()
    create_date = models.DateTimeField()

    def __str__(self):
        return self.subject

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField()