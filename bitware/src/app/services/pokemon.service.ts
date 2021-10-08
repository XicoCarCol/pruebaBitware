import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';


  private p1 = 'https://pokeapi.co/api/v2/pokemon/21/';
  private p2 = 'https://pokeapi.co/api/v2/pokemon/22/';
  private p3 = 'https://pokeapi.co/api/v2/pokemon/23/';
  private arbok = 'https://pokeapi.co/api/v2/pokemon/24/';
  private pikachu = 'https://pokeapi.co/api/v2/pokemon/25/';
  private raichu = 'https://pokeapi.co/api/v2/pokemon/26/';
  private sandshrew = 'https://pokeapi.co/api/v2/pokemon/27/';
  private sandslash = 'https://pokeapi.co/api/v2/pokemon/28/';
  private nidoranf = 'https://pokeapi.co/api/v2/pokemon/29/';
  private nidorina = 'https://pokeapi.co/api/v2/pokemon/30/';
  private nidoqueen = 'https://pokeapi.co/api/v2/pokemon/31/';
  private nidoranm = 'https://pokeapi.co/api/v2/pokemon/32/';
  private nidorino = 'https://pokeapi.co/api/v2/pokemon/33/';
  private nidoking = 'https://pokeapi.co/api/v2/pokemon/34/';
  private clefairy = 'https://pokeapi.co/api/v2/pokemon/35/';
  private clefable = 'https://pokeapi.co/api/v2/pokemon/36/';
  private vulpix = 'https://pokeapi.co/api/v2/pokemon/37/';
  private ninetales = 'https://pokeapi.co/api/v2/pokemon/38/';
  private jigglypuff = 'https://pokeapi.co/api/v2/pokemon/39/';
  private wigglytuff = 'https://pokeapi.co/api/v2/pokemon/40/';


  constructor(
    private htppClient: HttpClient
  ) { }

  /* Funcion que trae el pokemon */
  public fnGetPokemon() {
    return this.htppClient.get<any>(this.urlPokemon);
  }


  /* Funcion que trae el pokemon uno*/
  public fnGetPuno() {
    return this.htppClient.get<any>(this.p1);
  }

  /* Funcion que trae el pokemon Dos */
  public fnGetPdos() {
    return this.htppClient.get<any>(this.p2);
  }

  /* Funcion que trae el pokemon Dos */
  public fnGetPtres() {
    return this.htppClient.get<any>(this.p3);
  }

  /* Funcion que trae el pokemon arbok */
  public fnGetParbok() {
    return this.htppClient.get<any>(this.arbok);
  }

  /* Funcion que trae el pokemon pikachu */
  public fnGetPpikachu() {
    return this.htppClient.get<any>(this.pikachu);
  }

  /* Funcion que trae el pokemon raichu */
  public fnGetPraichu() {
    return this.htppClient.get<any>(this.raichu);
  }

  /* Funcion que trae el pokemon sandshrew */
  public fnGetPsandshrew() {
    return this.htppClient.get<any>(this.sandshrew);
  }

  /* Funcion que trae el pokemon sandslash */
  public fnGetPsandslash() {
    return this.htppClient.get<any>(this.sandslash);
  }

  /* Funcion que trae el pokemon nidoranf */
  public fnGetPnidoranf() {
    return this.htppClient.get<any>(this.nidoranf);
  }

  /* Funcion que trae el pokemon nidorina */
  public fnGetPnidorina() {
    return this.htppClient.get<any>(this.nidorina);
  }

  /* Funcion que trae el pokemon nidoqueen */
  public fnGetPnidoqueen() {
    return this.htppClient.get<any>(this.nidoqueen);
  }
  /* Funcion que trae el pokemon nidoranm */
  public fnGetPnidoranm() {
    return this.htppClient.get<any>(this.nidoranm);
  }
  /* Funcion que trae el pokemon nidorino */
  public fnGetPnidorino() {
    return this.htppClient.get<any>(this.nidorino);
  }
  /* Funcion que trae el pokemon nidoking */
  public fnGetPnidoking() {
    return this.htppClient.get<any>(this.nidoking);
  }

  /* Funcion que trae el pokemon clefairy */
  public fnGetPclefairy() {
    return this.htppClient.get<any>(this.clefairy);
  }

  /* Funcion que trae el pokemon clefable */
  public fnGetPclefable() {
    return this.htppClient.get<any>(this.clefable);
  }

  /* Funcion que trae el pokemon vulpix */
  public fnGetPvulpix() {
    return this.htppClient.get<any>(this.vulpix);
  }

  /* Funcion que trae el pokemon ninetales */
  public fnGetPninetales() {
    return this.htppClient.get<any>(this.ninetales);
  }

  /* Funcion que trae el pokemon jigglypuff */
  public fnGetPjigglypuff() {
    return this.htppClient.get<any>(this.jigglypuff);
  }

  /* Funcion que trae el pokemon wigglytuff */
  public fnGetPwigglytuff() {
    return this.htppClient.get<any>(this.wigglytuff);
  }





}


export interface pokemon {
  results: [{
    name: string;
  }];
}
