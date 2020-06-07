import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Client[]> {
    return this.http.get<Client[]>('https://crudcrud.com/api/5c5efcc83a404b65ab242a703220e7b8/client');
  }

  inserirClient(client: Client): Observable<Client> {
    return this.http.post<Client>('https://crudcrud.com/api/5c5efcc83a404b65ab242a703220e7b8/client', client);
  }

  atualizarClient(client: Client): Observable<any> {
    const id = client._id;
    delete client._id;
    return this.http.put('https://crudcrud.com/api/5c5efcc83a404b65ab242a703220e7b8/client/' + id, client);
  }

  removerClient(id: string): Observable<any>{
    return this.http.delete('https://crudcrud.com/api/5c5efcc83a404b65ab242a703220e7b8/client/' + id);
  }

}
