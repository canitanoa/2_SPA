import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "app/services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private _router:Router ) { 
   
    console.log("Constructor...");

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe( id:number ){
    this._router.navigate( ['heroes/heroe',id] );
  }

}
