import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientes: Array<Client>;
  colunas = ['nome', 'cpf', 'acoes'];
  clienteSelecionado: Client;

  inserindo = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clientService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;

    });
  }

  remover(id: string) {
    this.clientService.removerClient(id).subscribe(() => {
      alert('Cliente Removido');
      this.listar();
    });
  }

  selecionar(cliente: Client) {
    this.inserindo = false;
    this.clienteSelecionado = cliente;
  }

  cancelar() {
    this.clienteSelecionado = null;
  }

  salvar() {
    if (this.inserindo) {
      this.clientService.inserirClient(this.clienteSelecionado).subscribe(() => {
        alert('cliente inserido');
        this.listar();
        this.cancelar();
      });
    } else {
      this.clientService.atualizarClient(this.clienteSelecionado).subscribe(() => {
        alert('cliente Atualizado');
        this.listar();
        this.cancelar();
      });
    }
  }

  newClient() {
    this.inserindo = true;
    this.clienteSelecionado = new Client();
  }

}
