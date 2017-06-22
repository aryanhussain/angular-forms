import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { appRoutes } from './app.routes';
import {FormComponent} from './form/form.component'
import {FormModule} from './form/form.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,appRoutes,ContactModule,ReactiveFormsModule,FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
