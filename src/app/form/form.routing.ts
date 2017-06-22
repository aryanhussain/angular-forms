import { NgModule }  from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {Routes,RouterModule} from '@angular/router'
import {FormComponent} from '.././form/form.component'
import {SimpleFormComponent} from '.././simple-form/simple-form.component'
import {AdvanceFormComponent} from '.././advance-form/advance-form.component'
import {FromModelComponent} from '.././from-model/from-model.component'
import { FormExplicitComponent } from '.././form-explicit/form-explicit.component';
import { FormEventsComponent } from '.././form-events/form-events.component';
import { FormCustomValidationComponent } from '.././form-custom-validation/form-custom-validation.component';

const routes:Routes = [
    {
        path:'form',
        component:FormComponent,
        
        children: [
            {
                path:'simple',
                component:SimpleFormComponent
            },
            {
                path:'fromcontrol',
                component:AdvanceFormComponent
            },
            {
                path:'bymodel',
                component:FromModelComponent
            },
            {
                path:'explicit',
                component:FormExplicitComponent
            },
            {
                path:'byevent',
                component:FormEventsComponent
            },
            {
                path:'customvalidation',
                component:FormCustomValidationComponent
            }
            ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule {}


