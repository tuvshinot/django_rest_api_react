from django.shortcuts import render

# Create your views here.

def index(request):
    context = {
        'FromView' : 'Hello from View .py'
    }
    return render(request, 'frontend/leadmanager.html', context)
