import { Component, OnInit } from '@angular/core';
import { Product } from '../module/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productservice: ProductService) {
    this. productservice .getProducts()
    .subscribe((res: Product[]) =>{
      this.products = res;
    console.log('log', this.products);
   });
  }

  ngOnInit() {
  }

}
