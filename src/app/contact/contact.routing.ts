import { NgModule }  from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {ContactFromComponent} from '../contact/contact-from/contact-from.component'
import { ContactAddressComponent } from './contact-address/contact-address.component';

const routes:Routes = [
    {
        path:'contact',
        component:ContactFromComponent,
        
        children: [
            {
                path:'form',
                component:ContactFromComponent
            },
            {
                path:'address',
                component:ContactAddressComponent
            }
            ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class contactRoutingModule {}


