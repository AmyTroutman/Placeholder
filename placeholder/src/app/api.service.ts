import { Injectable } from '@angular/core';
import { ITodo } from './ITodo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  async get(options?: any): Promise<ITodo[]> {
    return await this.httpClient.get<ITodo[]>(this.url, {
      headers: null,
      params: options
    }).toPromise();
  }
}
