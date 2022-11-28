from django.db import models

# Create your models here.
class Arquivos(models.Model):
    nome_arquivo = models.CharField(max_length=50)
    gravacao = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nome_arquivo
    

