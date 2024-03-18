import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { provideState, provideStore } from '@ngrx/store';
import { CartReducer } from './states/cart/cart.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), HttpClientModule, provideStore(),
    provideState({ name: "cart", reducer: CartReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
