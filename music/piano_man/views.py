from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Arquivos 
from django.views.generic import CreateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy

# Create your views here.
@login_required
def index(request):
    arquivo = Arquivos.objects.all()
    return render(request, 'piano_man/index.html', {"Arquivos": arquivo})


def teste(request):
    my_dic = {'first_name': 'leonardo mastra'}

    return render(request, 'piano_man/teste.html',context=my_dic)

def salvar(request):
    nome = request.POST.get('nome_arquivo')
    Arquivos.objects.create(nome_arquivo=nome)
    # Arquivos.objects.all().delete()
    arquivo = Arquivos.objects.all()
    return render(request, 'piano_man/index.html', {"Arquivos": arquivo})


def editar(request,id):
    arquivo = Arquivos.objects.get(id=id)
    return render(request, 'piano_man/update.html', {"Arquivos": arquivo})

def update(request, id):
    arq_nome = request.POST.get("nome")
    arquivo = Arquivos.objects.get(id=id)
    arquivo.nome_arquivo = arq_nome
    arquivo.save()
    return redirect(index)
    

class CreateFile(CreateView):
    model = Arquivos
    fiels = '__all__'


class SignUpView(CreateView):
    # reverse_lazy('login')
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'piano_man/signup.html' 