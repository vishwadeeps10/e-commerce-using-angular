// import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'about-us', component: AboutUsComponent},
];
