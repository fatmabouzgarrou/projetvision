from django.urls import path
from .views import AIModelListView, PredictImageView

urlpatterns = [
    path('models/', AIModelListView.as_view(), name='model-list'),
    path('predict/', PredictImageView.as_view(), name='predict-image'),
]