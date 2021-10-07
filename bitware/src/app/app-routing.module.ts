import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { VistaCatalogoComponent } from './vistaCatalogo/vista-catalogo/vista-catalogo.component';
import { VistaPerfilComponent } from './vistaPerfil/vista-perfil/vista-perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'vista-catalogo', component: VistaCatalogoComponent },
  { path: 'vista-perfil', component: VistaPerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
