import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactosService } from '../contactos.service';
import { Contactos } from "../interfaces/contactos";

@Component({
  selector: "app-contactos-detail",
  templateUrl: "./contactos-detail.component.html",
  styleUrls: ["./contactos-detail.component.css"],
})
export class ContactosDetailComponent implements OnInit {
  constructor(
    private cService: ContactosService,
    private route: ActivatedRoute,
  ) {}

  listContactos?: Contactos;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get("id"));
      this.cService.getDetailById(id).subscribe((resp: any) => {
        this.listContactos = resp.data;
      });
    });
  }
}
