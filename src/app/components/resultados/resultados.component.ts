import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "app/services/heroes.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService,
               private _router:Router,
               private _activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {

    //Recuperamos el parametro que veine por url
    this._activatedRoute.params.subscribe( params => {
        this.termino = params["termino"];
        this.heroes = this._heroesService.buscarHeroes( params["termino"] );
        console.log( this.heroes );
    } )
  }

  hayResultados(term:string){
    let val = false;
    if (term.length>0) {
      val = true;
    }
    return val;
  }

  verHeroe( id:number ){
    this._router.navigate( ['heroes/heroe',id] ); 
  }

}
