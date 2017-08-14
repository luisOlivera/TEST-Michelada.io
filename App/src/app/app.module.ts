import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarcasComponent } from './marcas/marcas.component';

import{ MarcasService } from './marcas/marcas.service';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
