import { createSelector } from "@ngrx/store";
import { IProduct } from "../../interfaces/product.listing";

export interface ProductState {
    products: IProduct[];
  }

  export interface AppState {
    cart: ProductState;
  }
   

export const selectCartState = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
    selectCartState,
  (state: ProductState) => state.products
);
