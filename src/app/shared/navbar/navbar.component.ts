import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCT_LISTING } from '../../constants/api-constant';
import { Store } from '@ngrx/store';
import { AppState, selectCartItems } from '../../states/cart/cart.selector';
import { IProduct } from '../../interfaces/product.listing';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartItems$!: Observable<IProduct[]>;
  cartLength: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartItems$.subscribe(items => {
      this.cartLength = items.length;
    });
  }
}
