from django.db import models

# Create your models here.

class Article(models.Model):

    write_date = models.DateTimeField(auto_now_add=True)

    title = models.CharField(max_length = 30)
    content = models.TextField()



