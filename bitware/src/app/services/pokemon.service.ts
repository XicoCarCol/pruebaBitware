import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';


  private uno = 'https://pokeapi.co/api/v2/pokemon/1/';
  private dos = 'https://pokeapi.co/api/v2/pokemon/2/';
  private tres = 'https://pokeapi.co/api/v2/pokemon/3/';
  private cuatro = 'https://pokeapi.co/api/v2/pokemon/4/';
  private cinco = 'https://pokeapi.co/api/v2/pokemon/5/';
  private seis = 'https://pokeapi.co/api/v2/pokemon/6/';
  private siete = 'https://pokeapi.co/api/v2/pokemon/7/';
  private ocho = 'https://pokeapi.co/api/v2/pokemon/8/';
  private nueve = 'https://pokeapi.co/api/v2/pokemon/9/';
  private diez = 'https://pokeapi.co/api/v2/pokemon/10/';
  private once = 'https://pokeapi.co/api/v2/pokemon/11/';
  private doce = 'https://pokeapi.co/api/v2/pokemon/12/';
  private trece = 'https://pokeapi.co/api/v2/pokemon/13/';
  private catorce = 'https://pokeapi.co/api/v2/pokemon/14/';
  private quince = 'https://pokeapi.co/api/v2/pokemon/15/';
  private dieciseis = 'https://pokeapi.co/api/v2/pokemon/16/';
  private dicisiete = 'https://pokeapi.co/api/v2/pokemon/17/';
  private dieciocho = 'https://pokeapi.co/api/v2/pokemon/18/';
  private diecinueve = 'https://pokeapi.co/api/v2/pokemon/19/';
  private veinte = 'https://pokeapi.co/api/v2/pokemon/20/';


  constructor(
    private htppClient: HttpClient
  ) { }

  /* Funcion que trae el pokemon */
  public fnGetPokemon() {
    return this.htppClient.get<any>(this.urlPokemon);
  }


  /* Funcion que trae el pokemon */
  public fnGetPokemonUno() {
    return this.htppClient.get<any>(this.uno);
  }

   /* Funcion que trae el pokemon Dos */
   public fnGetPokemonDos() {
    return this.htppClient.get<any>(this.dos);
  }

  

}


export interface pokemon {
  results: [{
    name: string;
  }];
}
