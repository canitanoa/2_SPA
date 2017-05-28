import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { HeroesService } from "./services/heroes.service";
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { PipesComponent } from './components/pipes/pipes.component';

//Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  //Aca van los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ResultadosComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  //Aca van los Servicios
  providers: [
    HeroesService,
    {provide:LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
