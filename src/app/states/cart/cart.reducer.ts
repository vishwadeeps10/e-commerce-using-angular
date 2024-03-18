import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from '../../interfaces/product.listing';
import * as cartActions from './cart.action';

export interface CartState {
  products: IProduct[];
}

export const initialState: CartState = {
  products: [],
};

export const CartReducer = createReducer(
  initialState,

  //add to cart
  on(cartActions.addToCart, (state, { product }) => {
    const existingProductIndex = state.products.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedProducts = state.products.map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );

      return { ...state, products: updatedProducts };
    } else {
      return { ...state, products: [...state.products, { ...product, quantity: 1 }] };
    }
  }),


//remove items form cart
  on(cartActions.removeItem, (state, { productId }) => {
    const updatedProduct = state.products.filter(
        (product)=>product.id != productId
        )
    return {
      ...state,
      products: updatedProduct,
    };
  }),

  //incremnet quantity 
  on(cartActions.incrementProduct, (state, { productId }) => {
    const updatedProduct = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProduct,
    };
  }),

  //decrement quantity
  on(cartActions.decrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map(product =>
      product.id === productId ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product
    );

    return { ...state, products: updatedProducts };
  })
);
