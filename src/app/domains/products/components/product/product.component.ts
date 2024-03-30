import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, ReversePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;

  // @Input({required:true}) img:string = '';
  // @Input({required:true}) price:number=0;
  // @Input({required:true}) title:string='';

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }


}
