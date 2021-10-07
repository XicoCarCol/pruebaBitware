import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  /* Funcion que regresar al componente principal */
  public fnRegresar() {
    this.router.navigate(['/navbar'], { relativeTo: this.activatedRoute })

  }

}
