import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(environment.apiUrl+'products');
  }
  getAllDatabyid(id:any) {
    return this.http.get(environment.apiUrl+'products/'+id);
  }
}
