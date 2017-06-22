import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {contactRoutingModule} from '../contact/contact.routing'
import { ContactFromComponent } from './contact-from/contact-from.component';
import { ContactAddressComponent } from './contact-address/contact-address.component';

@NgModule({
  imports: [
    CommonModule,contactRoutingModule
  ],
  declarations: [ContactFromComponent, ContactAddressComponent]
})
export class ContactModule { }
