from django.db import models

# Create your models here.

class Code(models.Model):
    title = models.CharField(max_length=512)
    code = models.TextField()
    timedate = models.DateTimeField(auto_now_add=True)