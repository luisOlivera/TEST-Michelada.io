import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Marcas } from './classMarca'; 

@Injectable()
export class MarcasService {

  private url_base = "http://localhost:8000/marcas";

  constructor(private http: Http) { }

  getMarcas(){
    return this.http.get(this.url_base).map(r => r.json());
  }

  getMarca(id){
    return this.http.get(this.url_base + "/" + id).map(r => r.json());
  }

  postMarca(marca: Marcas){
    return this.http.post(this.url_base,marca.toJson).map(r => r.json());    
  }

  putMarca(marca: Marcas){
    return this.http.put(this.url_base+ "/" + marca.Id_Marca,marca.toJson).map(r => r.json());    
  }

  deleteMarca(id){
    return this.http.delete(this.url_base + "/" + id).map(r => r.json());
  }
}
