// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorComponent } from './shared/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [

    {path: '', component: DashboardComponent },
    {
        path: 'dashboard',
        pathMatch: 'full',
        redirectTo: '',
    },
    {
		path: 'products/:id',
		component: ProductDetailsComponent,
	},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', component: ErrorComponent},
   
    
];
