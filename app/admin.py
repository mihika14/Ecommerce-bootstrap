from django.contrib import admin
# Register your models here.
from .models import Category, SubCategory , Product, contact_us, Order, Brand, Blog, Size, Color, Cart
admin.site.register(Category)
admin.site.register(SubCategory)
# add product in admin panel
admin.site.register(contact_us)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Blog)
admin.site.register(Brand)
admin.site.register(Size)
admin.site.register(Color)
admin.site.register(Cart)