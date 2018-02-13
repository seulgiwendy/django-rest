from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin

from bbs.models import Article, User

admin.site.register(Article)
admin.site.register(User, UserAdmin)