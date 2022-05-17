import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {

  constructor() { }

  @Input() subTotal: number;

  ngOnInit(): void {
  }


}
