import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemones: Array<PokemonDetailDto> = []
  
  selectedPokemon! :PokemonDetailDto
  selected: Boolean = false;

  constructor(private pokemonsService: PokemonService) { }

  getPokemones() {
    this.pokemones = this.pokemonsService.getPokemons()
  }

  onSelected(pokemon: PokemonDetailDto) {
    this.selectedPokemon = pokemon;
    this.selected = true;
  }

  ngOnInit() {
    this.getPokemones();
    console.log(this.pokemones);
  }

}
