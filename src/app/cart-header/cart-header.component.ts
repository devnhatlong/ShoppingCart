import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
})
export class CartHeaderComponent implements OnInit {

  constructor() { }

  @Input() numberItems: number

  ngOnInit(): void {
  }

}
