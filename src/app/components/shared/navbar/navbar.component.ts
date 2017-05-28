import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router ) { 
     console.log("Constructor...");
  }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    this._router.navigate( ['/resultados',termino] );
  }

}
