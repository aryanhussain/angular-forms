import {Routes,RouterModule} from '@angular/router'
import {FormComponent} from './form/form.component'

const routes:Routes = [
    {
        path:'',
        redirectTo:'form',
        pathMatch:'full'
    },
     {
        path:'form',
        loadChildren:'app/form/form.module#FormModule',
    }
];

export const appRoutes = RouterModule.forRoot(routes)


