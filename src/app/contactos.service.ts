import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contactos } from "./interfaces/contactos";

@Injectable({
  providedIn: "root",
})
export class ContactosService {
  constructor(private http: HttpClient) {}

  getAllContactos() {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }

  getDetailById(id: number) {
    return this.http.get<any>('https://reqres.in/api/users/${id}');
  }
}
