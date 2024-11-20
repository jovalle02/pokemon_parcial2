import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon/pokemon-detalle/pokemon-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListarComponent,
    PokemonDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
