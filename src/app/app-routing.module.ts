import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'brand',
    pathMatch: 'full'
  },
  {
    path: 'brand',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandPageModule)
  },
  {
    path: 'beer',
    loadChildren: () => import('./beer/beer.module').then(m => m.BeerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
