import { Injectable } from '@angular/core';
import { Product } from '../module/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
  {
    name: 'EGG',
    image: 'assets/pic12.jpg',
     message: 'minions',
    details: 'I am hatched',
    price: 'Price:250',
    isAvailable: true
  },
  {
    name: 'Emoji',
    image: 'assets/pic10.jpg',
     message: 'Emoji',
    details: 'U cannot it get it.Unless u buy it.',
    price: 'Price:200',
    isAvailable: false
  },
    {
    name: 'Minions',
    image: 'assets/pic13.jpg',
     message: 'minions',
    details: 'U cannot it get it.Unless u buy it.',
    price: 'Price:200',
    isAvailable: true
  }
  ];

  constructor() { }

  getProducts(){
return this.products;

  }
}
