from rest_framework import serializers

from bbs.models import Article


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ('write_date', 'title', 'content')




