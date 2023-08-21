import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form_postComponent } from './Form_post/Form_post.component';
import { ListaComponent } from './lista/lista.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewComponent,
    Form_postComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
