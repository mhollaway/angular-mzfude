import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    //this.shippingCosts = this.cartService.getShippingPrices();
    this.cartService.getShippingPrices().subscribe((data: string) => this.shippingCosts = data);
  }

  getShippingPricesFromServer() {
    this.cartService.getShippingPrices()
      .subscribe((data: string) => this.shippingCosts = data
      // {
      //     type: data['type'],
      //     price:  data['price']
      // }
      );
  }  

}
