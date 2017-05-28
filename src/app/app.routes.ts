import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import { HomeComponent } from "app/components/home/home.component";
import { HeroeComponent } from "app/components/heroe/heroe.component";
import { ResultadosComponent } from "app/components/resultados/resultados.component";
import { PipesComponent } from "app/components/pipes/pipes.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/heroe/:id', component: HeroeComponent },
    { path: 'resultados/:termino', component: ResultadosComponent },
    { path: 'pipes', component: PipesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
    ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});