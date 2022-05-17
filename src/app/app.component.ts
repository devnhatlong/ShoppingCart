import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'IPHONE 13 PRO MAX',
      description: 'Sang trọng, cao cấp - Màu sắc độc đáo và cuốn hút',
      thumbnail: '/assets/iphone.jpg',
      price: 149,
      quantity: 2
    },
    {
      id: '2',
      name: 'Samsung Galaxy Note 20 Ultra 5G',
      description: 'Sang trọng, cao cấp - Màu sắc độc đáo và cuốn hút',
      thumbnail: '/assets/samsung.jpg',
      price: 100,
      quantity: 1
    },
    {
      id: '3',
      name: 'Xiaomi Redmi Note 11',
      description: 'Nâng cao trải nghiệm thị giác - Màn hình AMOLED 6.43"" Full HD+, công nghệ DotDisplay',
      thumbnail: '/assets/xiaomi.jpg',
      price: 100,
      quantity: 3
    },
  ];

  numberItems: number;
  subTotal: number;

  removeProduct(productId: string) {
    // Delete product
    const index = this.products.findIndex((product: { id: string; }) => product.id === productId);
    this.products.splice(index, 1);
  }
  // Tính tổng tiền và cập nhật số lượng item
  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
    this.numberItems = this.numberItems;
    this.subTotal = this.subTotal;


    // this.discount = (this.subTotal * this.discountPercent) / 100;
    // this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }
}

