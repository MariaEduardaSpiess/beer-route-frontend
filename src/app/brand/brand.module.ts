import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { BrandListPage } from './brand-list/brand-list.page';
import { BrandRegisterPage } from './brand-register/brand-register.page';
import { BrandService } from './brand.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'brand-list'
  },
  {
    path: 'brand-list',
    component: BrandListPage
  },
  {
    path: 'brand-list/brand-register',
    component: BrandRegisterPage
  },
  {
    path: 'beer/:brand',
    loadChildren: () => import('../beer/beer.module').then(m => m.BeerPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrandListPage, BrandRegisterPage],
  providers: [BrandService]
})
export class BrandPageModule { }
