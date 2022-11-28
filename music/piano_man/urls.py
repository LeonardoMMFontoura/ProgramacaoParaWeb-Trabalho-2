from django.urls import path
from . import views

app_name = "piano_man"

urlpatterns = [
    path('',views.index, name="index"),
    path('teste/',views.teste, name="testes"),
    path('salvar/',views.salvar, name="salvar"),
    path('editar/<int:id>',views.editar, name="editar"),
    path('update/<int:id>',views.update, name="update"),
    path('signup/',views.SignUpView.as_view(),name="signup")
]