import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module'
import { AdminModule } from './admin/admin.module'
//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from '../app/components/tienda/tienda.component'
import { ParquesComponent } from '../app/components/parques/parques.component'
import { AnimalsComponent } from '../app/components/animals/animals.component'
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'
import { KeepersComponent } from '../app/components/keepers/keepers.component'
import { RegisterComponent } from '../app/components/register/register.component'
import { LoginComponent } from '../app/components/login/login.component'

//Services
// import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
