import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input() products: any;
  @Output() onRemoveProduct = new EventEmitter();

  ngOnInit() { }

  removeProduct(productId: string): void {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(element: any) {
    console.log(element.value);
  }

}
