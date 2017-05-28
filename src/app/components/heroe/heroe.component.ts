import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "app/services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  //heroe2:Heroe[];
  heroe:any={};

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesServices:HeroesService) { 

    //Recuperamos el parametro que veine por url
    this._activatedRoute.params.subscribe( params => {
        console.log( params["id"] );
        this.heroe = this._heroesServices.getHeroe( params["id"] );
    } )

  }

  ngOnInit() {
  }

}
