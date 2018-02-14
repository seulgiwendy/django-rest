from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

# Create your views here.
from bbs.models import Article
from bbs.serializers import ArticleSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer