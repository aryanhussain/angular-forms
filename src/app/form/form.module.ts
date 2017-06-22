import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRoutingModule} from './form.routing'
import { FormComponent } from './form.component';
import {SimpleFormComponent} from '.././simple-form/simple-form.component'
import {AdvanceFormComponent} from '.././advance-form/advance-form.component'
import {FromModelComponent} from '.././from-model/from-model.component'
import { FormExplicitComponent } from '.././form-explicit/form-explicit.component';
import { FormEventsComponent } from '.././form-events/form-events.component';
import { FormCustomValidationComponent } from '.././form-custom-validation/form-custom-validation.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [FormComponent,SimpleFormComponent,AdvanceFormComponent,FromModelComponent,FormExplicitComponent,FormEventsComponent,FormCustomValidationComponent]
})
export class FormModule { }
