from .api import RegisterAPI, LoginAPI, UserAPI
from django.urls import path, include
from knox import views as knox_view

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/logout', knox_view.LogoutView.as_view(), name='knox-logout'),
    path('api/auth/user', UserAPI.as_view()),
]