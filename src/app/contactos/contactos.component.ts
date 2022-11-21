import { Component, OnInit } from "@angular/core";
import { Contactos } from "../interfaces/contactos";
import { ContactosService } from "../contactos.service";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent implements OnInit {
  constructor(private conService: ContactosService) {}

  listaContactos: any[] = [];

  getContactos() {
    this.conService.getAllContactos().subscribe((resp) => {
      console.log(resp);
      resp.data.forEach((element: Contactos) => {
        this.listaContactos.push(element);
      });
    });
  }

  ngOnInit(): void {
    this.getContactos();
  }
}
