import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-tipos',
  templateUrl: './pokemon-tipos.component.html',
  styleUrls: ['./pokemon-tipos.component.css']
})
export class PokemonTiposComponent implements OnInit {
  pokemons: Array<PokemonDetailDto> = [] 
  pokemonsFiltered: Array<PokemonDetailDto> = []
  tipoPokemon!: string

  constructor(private route: ActivatedRoute ,private pokemonsService: PokemonService) { }

  getPokemones() {
    this.pokemons = this.pokemonsService.getPokemons();

    if(this.tipoPokemon === undefined) {
      this.tipoPokemon = this.route.snapshot.paramMap.get('tipo')!
      if (this.tipoPokemon) {
        this.pokemonsFiltered = this.pokemons.filter(pokemon => 
          pokemon.types.some(type => type.type.name.toLowerCase() === this.tipoPokemon.toLowerCase())
        );
      }
    }
  }

  
  ngOnInit() {
    this.getPokemones()



    console.log(this.pokemonsFiltered);
  }
}
