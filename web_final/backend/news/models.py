from django.db import models
from django.contrib.auth.models import User

class NewsArticle(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image_url = models.URLField()
    source = models.CharField(max_length=255)
    published_at = models.DateTimeField()

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    notifications_enabled = models.BooleanField(default=True)
    language_preference = models.CharField(max_length=10, choices=[('EN', 'English'), ('TR', 'Turkish')], default='EN')
