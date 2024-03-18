import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCartItems } from '../../states/cart/cart.selector';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/product.listing';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TruncateWordsPipe } from "../../pipes/truncate-words.pipe";
import { decrementProduct, incrementProduct, removeItem } from '../../states/cart/cart.action';


@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [AsyncPipe, JsonPipe, CommonModule, TruncateWordsPipe]
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {}

  increaseQuantity(id: number){
    this.store.dispatch(incrementProduct({ productId: id }));
  }
  decreaseQuantity(id: number){
    this.store.dispatch(decrementProduct({ productId: id }));
  }
  removeItem(id: number){
    this.store.dispatch(removeItem({ productId: id }));
  }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
  }
}
