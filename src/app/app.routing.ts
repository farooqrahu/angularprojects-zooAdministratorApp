import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes.
import { TiendaComponent } from '../app/components/tienda/tienda.component'
import { AnimalsComponent } from '../app/components/animals/animals.component'
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'
import { KeepersComponent } from '../app/components/keepers/keepers.component'
import { RegisterComponent } from '../app/components/register/register.component'
import { LoginComponent } from '../app/components/login/login.component'

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keepers', component: KeepersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 