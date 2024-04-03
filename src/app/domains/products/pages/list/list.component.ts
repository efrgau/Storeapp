import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoryService);
  @Input() category_id?:string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.getCategories();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
    const category_id = changes['category_id'];
    console.log(category_id);
    if(category_id){
      this.getProducts();
    }
  }



  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (data) => {
          this.products.set(data);
        }, error: () => {

        }
      });
  }

  private getCategories(){
    this.categoriesService.getAllCategories()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories);
      }, error: () => {

      }
    });
  }




}
