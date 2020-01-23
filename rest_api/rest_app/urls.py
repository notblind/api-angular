from django.conf.urls import url
from .views import ApiView

urlpatterns = [
    url(r'^events/$', ApiView.as_view(), name='api_view'),
    url(r'^events/(\d+)/$', ApiView.as_view(), name='api_view_update'),
]
