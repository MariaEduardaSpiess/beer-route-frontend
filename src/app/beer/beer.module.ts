import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { BeerListPage } from './beer-list/beer-list.page';
import { BeerRegisterPage } from './beer-register/beer-register.page';
import { BeerService } from './beer.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beer-list'
  },
  {
    path: 'beer-list',
    component: BeerListPage
  },
  {
    path: 'beer-list/beer-register',
    component: BeerRegisterPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeerListPage, BeerRegisterPage],
  providers: [BeerService]
})
export class BeerPageModule { }
