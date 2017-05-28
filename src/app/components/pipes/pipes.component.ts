import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre = "Adrian";
  arreglo =[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a=0.234;
  salario=1234.5;

  //Objeto
  heroe={
    nombre:"Logan",
    clave:"Wolverine",
    edad:40,
    direccion:{
      calle:"Primera",
      casa:"11"
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llego la data!'),3500);
  })

  fecha = new Date();
  nombre2 = "beniCIo ViTO canitanO";

  video = "HTwFo2LW36I";

  activar:boolean = true;

}
