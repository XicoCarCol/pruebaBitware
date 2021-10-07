import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-vista-catalogo',
  templateUrl: './vista-catalogo.component.html',
  styleUrls: ['./vista-catalogo.component.css']
})
export class VistaCatalogoComponent implements OnInit {

  public lsPokemons!: pokemon[];
  public nombre = '';

  constructor(
    private svPokemon: PokemonService
  ) { }

  ngOnInit() {
    this.fnGetPokemon();

  }

  /* Funcion que trea la lista de los pokemon disponibles */
  public fnGetPokemon() {
    this.svPokemon.fnGetPokemon().subscribe(ls => {
      this.lsPokemons = ls.results;// lsPokemon lo ocupo para pintar las card dependiendo el tamaño de ls.results
      this.lsPokemons.forEach(ele => {

        // console.log("URL", ele.url);
      })
      // console.log(this.lsPokemons)
    })
  }

  // public getData = async () => {
  //   const url = 'https://pokeapi.co/api/v2/pokemon';
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   const resultado = Object.entries(json.results)

  //   resultado.forEach(elemento => {
  //     const pokemon = elemento[1];
  //     console.log(pokemon);
  //     const valorlist = async () => {
  //       const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${''}`;

  //       const resulPokemn = async () => {
  //         const responsePokemon = await fetch(urlPokemon);
  //         const jsonPok = await responsePokemon.json();
  //         console.log(jsonPok);

  //       }

  //       resulPokemn()
  //       valorlist()
  //     }

  //   })
  // }


  /* Funcion que trae el detalle */
  public fnGetDetalle(sNombre: string) {
    console.log("NOMBRE", sNombre)
    switch (sNombre) {
      case 'bulbasaur': this.svPokemon.fnGetPokemonUno().subscribe(data => { this.detalle(data); });
        break;
      case 'ivysaur': this.svPokemon.fnGetPokemonDos().subscribe(data => { this.detalle(data); });
        break;
      default: "Error";
    }
  }

  public detalle(data: any) {
    console.log("DATA", data)

  }


}



export interface pokemon {
  name: string;
  url: string;
}
