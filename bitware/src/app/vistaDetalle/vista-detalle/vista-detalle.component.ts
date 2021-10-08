import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { detallePokemon, type, types } from 'src/app/model/mPokemon.model';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  public nombre = '';
  public imagen = '';
  public tipo!: type;
  public base_stat!: number;
  lista: string[] = ["hola", "que", "tal", "estas"];

  constructor(
    public matDialogRef: MatDialogRef<VistaDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: detallePokemon) { }

  ngOnInit(): void {
    this.fnSetData();
  }

  /* Funcion que setea la data */
  public fnSetData() {
    this.nombre = this.data.name;
    this.imagen = this.data.sprites.back_default;
    const tipo: types[] = this.data.types;
    tipo.forEach(t => {
      this.tipo = t.type;

    });
    this.data.stats.forEach(stat => {
      this.base_stat = stat.base_stat;

    })



  }


  /* Funcion que cierra la modal  */
  public fnCerrar() {
    this.matDialogRef.close();
  }
}
