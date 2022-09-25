from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('chat/', include('chat.urls')),
    path('payment/', include('payment.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header="Admin"
admin.site.site_title="Admin Portal"
admin.site.index_title="Welcome to the Admin Portal"
