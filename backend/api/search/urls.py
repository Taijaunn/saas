"""
This module defines the urls of the search views.

Variables:
    - urlpatterns: A list of url patterns of search views.
"""

from django.urls import path

from .views import *

urlpatterns = [
    path('search', SearchAPI.as_view()),
]
