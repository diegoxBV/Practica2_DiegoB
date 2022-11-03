import { Component, OnInit } from '@angular/core';
import { sucu } from 'src/interfaces';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {

  data: sucu[] = [
    {
      tipo: "Matriz",
      nombre: "Oficina Principal",
      direccion : "Cori Oe2-153 y princesa toa",
      img: "../../assets/casa4.jpg",
      alt: ""
    },
    {
      tipo: "Sucursal",
      nombre: "La magdalena",
      direccion : "La Magdalena y alonso de angulo",
      img: "../../assets/casa1.png",
      alt: ""
    },
    {
      tipo: "Sucursal",
      nombre: "Atahualpa",
      direccion : "Redondel de la Atahualpa y tribuna del sur",
      img: "../../assets/casa2.jpg",
      alt: ""
    },
    {
      tipo: "Sucursal",
      nombre: "La colon",
      direccion : "La colon y 12 de octubre",
      img: "../../assets/casa3.jpg",
      alt: ""
    },
    {
      tipo: "Sucursal",
      nombre: "La coruña",
      direccion : "Coruña y 6 de diciembre",
      img: "../../assets/casa4.jpg",
      alt: ""
    },
    {
      tipo: "Sucursal",
      nombre: "Portoviejo",
      direccion : "Av. Roca Fuerte y portoviejo",
      img: "../../assets/casa5.jpg",
      alt: ""
    },
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
