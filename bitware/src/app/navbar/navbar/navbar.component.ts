import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  /* Funcion que redirecciona a la vista de catalogo */
  public fnVistaC() {
    this.router.navigate(['/vista-catalogo'], { relativeTo: this.activatedRoute })
  }

  /* Funcion que redirecciona a la vista de perfil */
  public fnVistaPerfil() {
    this.router.navigate(['/vista-perfil'], { relativeTo: this.activatedRoute })
  }
}
