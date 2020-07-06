import { Injectable } from '@angular/core';
import { ITodo } from './ITodo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private apiService: ApiService) { }

  async getList(): Promise<ITodo[]> {
    return await this.apiService.get();
  }
}
