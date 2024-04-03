import { Routes } from '@angular/router';

import{NotFoundComponent} from './../app/domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';


export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                //component:ListComponent
                loadComponent: ()=> import('./domains/products/pages/list/list.component')
            },
            {
                path:'About',
                loadComponent:()=> import('./domains/info/pages/about/about.component')
                
            },
            {
                path:'product/:id',
                component:ProductDetailComponent
            }
        ]
    },  
    {
        path:'**',
        component: NotFoundComponent
    },
];
