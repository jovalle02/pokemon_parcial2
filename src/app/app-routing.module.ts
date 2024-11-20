import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { PokemonTiposComponent } from './pokemon/pokemon-tipos/pokemon-tipos.component';

const routes: Routes = [
  {'path': '', component: PokemonListarComponent},
  { path: 'tipos/:tipo', component: PokemonTiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
