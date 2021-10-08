import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { pokemon } from 'src/app/model/mPokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { VistaDetalleComponent } from 'src/app/vistaDetalle/vista-detalle/vista-detalle.component';

@Component({
  selector: 'app-vista-catalogo',
  templateUrl: './vista-catalogo.component.html',
  styleUrls: ['./vista-catalogo.component.css']
})
export class VistaCatalogoComponent implements OnInit {

  public lsPokemons!: pokemon[];
  public nombre = '';
  public matDialogConfig!: MatDialogConfig<any>;


  constructor(
    private svPokemon: PokemonService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.fnGetPokemon();

  }

  /* Funcion que trea la lista de los pokemon disponibles */
  public fnGetPokemon() {
    this.svPokemon.fnGetPokemon().subscribe(ls => {
      this.lsPokemons = ls.results;// lsPokemon lo ocupo para pintar las card dependiendo el tamaño de ls.results
      this.lsPokemons.forEach(ele => {

      })

    })
  }


  /* Funcion que trae el detalle */
  public fnGetDetalle(sNombre: string) {
    switch (sNombre) {
      case 'spearow':
        this.svPokemon.fnGetPuno().subscribe(data => { this.detalle(data); });
        break;
      case 'fearow':
        this.svPokemon.fnGetPdos().subscribe(data => { this.detalle(data); });
        break;
      case 'ekans':
        this.svPokemon.fnGetPtres().subscribe(data => { this.detalle(data); });
        break;
      case 'arbok':
        this.svPokemon.fnGetParbok().subscribe(data => { this.detalle(data); });
        break;
      case 'pikachu':
        this.svPokemon.fnGetPpikachu().subscribe(data => { this.detalle(data); });
        break;
      case 'raichu':
        this.svPokemon.fnGetPraichu().subscribe(data => { this.detalle(data); });
        break;
      case 'sandshrew':
        this.svPokemon.fnGetPsandshrew().subscribe(data => { this.detalle(data); });
        break;
      case 'sandslash':
        this.svPokemon.fnGetPsandslash().subscribe(data => { this.detalle(data); });
        break;
      case 'nidoran-f':
        this.svPokemon.fnGetPnidoranf().subscribe(data => { this.detalle(data); });
        break;
      case 'nidorina':
        this.svPokemon.fnGetPnidorina().subscribe(data => { this.detalle(data); });
        break;
      case 'nidoqueen':
        this.svPokemon.fnGetPnidoqueen().subscribe(data => { this.detalle(data); });
        break;
      case 'nidoran-m':
        this.svPokemon.fnGetPnidoranm().subscribe(data => { this.detalle(data); });
        break;
      case 'nidorino':
        this.svPokemon.fnGetPnidorino().subscribe(data => { this.detalle(data); });
        break;
      case 'nidoking':
        this.svPokemon.fnGetPnidoking().subscribe(data => { this.detalle(data); });
        break;
      case 'clefairy':
        this.svPokemon.fnGetPclefairy().subscribe(data => { this.detalle(data); });
        break;
      case 'clefable':
        this.svPokemon.fnGetPclefable().subscribe(data => { this.detalle(data); });
        break;
      case 'vulpix':
        this.svPokemon.fnGetPvulpix().subscribe(data => { this.detalle(data); });
        break;
      case 'ninetales':
        this.svPokemon.fnGetPninetales().subscribe(data => { this.detalle(data); });
        break;
      case 'jigglypuff':
        this.svPokemon.fnGetPjigglypuff().subscribe(data => { this.detalle(data); });
        break;
      case 'wigglytuff':
        this.svPokemon.fnGetPwigglytuff().subscribe(data => { this.detalle(data); });
        break;
      default: "Error";
    }
  }

  /* Funcion que abre una modal para ver el detalle */
  public detalle(data: any) {
    this.matDialogConfig = new MatDialogConfig();
    this.matDialogConfig.width = '40%';
    this.matDialogConfig.data = data;
    const modal = this.matDialog.open(VistaDetalleComponent, this.matDialogConfig);
    modal.afterClosed().subscribe(result => {
      result = data;

    });

  }


}



