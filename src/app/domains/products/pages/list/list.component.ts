import { Component, Input, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './../../../shared/components/header/header.component';
import {Product} from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[]=[
      { id:Date.now(),
        title:'Zapatos Nike',
        price:250000,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Buso Retail d2',
        price:28500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Balene Blusa',
        price:21500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Falda Retail 2',
        price:80500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Gorra IO eras',
        price:245000,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Buso Retail d2',
        price:28500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Balene Blusa',
        price:21500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Falda Retail 2',
        price:80500,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
      { id:Date.now(),
        title:'Gorra IO eras',
        price:245000,
        image:'https://picsum.photos/640/640?r='+Math.random(),
        createdAt:new Date().toISOString()
      },
    ];

    this.products.set(initProducts);
  }

  fromChild(event:string){
    console.log('estamos en el padre');
    console.log(event);

  }



}
