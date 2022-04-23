import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = environment.baseURL;

  constructor(private http:HttpClient) { }

  Categoriess(){
    return [
      { name: 'Vegeterian' },
      { name: 'Non-Vegeterian' },
      { name: 'Both' }
    ]
  }
}
