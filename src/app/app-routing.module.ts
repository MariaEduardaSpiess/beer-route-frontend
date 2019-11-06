import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'brand',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandPageModule)
  },
  {
    path: 'beer',
    loadChildren: () => import('./beer/beer.module').then(m => m.BeerPageModule)
  },
  { path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'map',
    loadChildren: './map/map.module#MapPageModule'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
