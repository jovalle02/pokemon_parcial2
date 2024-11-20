import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {
  pokemonId!: string;
  @Input() pokemonDetail!: PokemonDetailDto;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService ) { }

  getPokemon() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon => {
      this.pokemonDetail = pokemon;
    });
  }

  ngOnInit() {
  }

}
