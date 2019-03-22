import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getAll(){
    return this._http.get('/api/items');
  }
  getOne(id){
    return this._http.get(`/api/items/${id}`)
  }
  addNew(newAuthor){
    return this._http.post('/api/items', newAuthor);
  }
  deleteOne(id){
    return this._http.delete(`/api/items/${id}`);
  }
  deleteAll(){
    return this._http.delete(`/api/items`);
  }
  updateOne(id, updatedAuthor){
    return this._http.put(`/api/items/${id}`, updatedAuthor);
  }
}
