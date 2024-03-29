import { Routes } from '@angular/router';

import{ListComponent} from './domains/products/pages/list/list.component';
import{AboutComponent} from './../app/domains/info/pages/about/about.component'

export const routes: Routes = [
    {
        path:'',
        component:ListComponent
    },
    {
        path:'About',
        component: AboutComponent
    }

];
