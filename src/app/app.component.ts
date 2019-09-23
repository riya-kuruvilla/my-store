import { Component } from '@angular/core';
import { Product } from './module/products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  // products: Product[] = [];
  constructor() {
    // this.products.push(this.productDetails);
    // this.products.push(this.secondProduct);
    // this.products.push(this.thirdProduct);
    // here foe image display cheyan
    // this.products = this.productservice.getProducts();
    // this. productservice .getProducts()
    // .subscribe((res: Product[]) =>{
    //   this.products = res;
    // console.log('log', this.products);
  };

    
  }
  // productDetails: Product = {//here product details are product specified
  //   name: 'EGG',
  //   image: 'assets/pic12.jpg',
  //    message: 'minions',
  //   details: 'I am hatched',
  //   price: 'Price:250',
  //   isAvailable: true
  // };
  // secondProduct: Product = {
  //   name: 'Emoji',
  //   image: 'assets/pic10.jpg',
  //    message: 'Emoji',
  //   details: 'U cannot it get it.Unless u buy it.',
  //   price: 'Price:200',
  //   isAvailable: false
  // };
  // thirdProduct: Product = {
  //   name: 'Minions',
  //   image: 'assets/pic13.jpg',
  //    message: 'minions',
  //   details: 'U cannot it get it.Unless u buy it.',
  //   price: 'Price:200',
  //   isAvailable: true
  // };



