from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
from django.db.models.signals import post_save
from django.dispatch import receiver

class Article(models.Model):
    title = models.CharField(max_length = 30)
    content = models.TextField()



