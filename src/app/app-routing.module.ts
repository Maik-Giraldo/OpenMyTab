import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'filter-character',
    loadChildren: ()=> import('./pages/filter-character/filter-character.module').then(m => m.FilterCharacterModule)
  },
  {
    path: 'details-character',
    loadChildren: ()=> import('./pages/details-character/details-character.module').then(m => m.DetailsCharacterModule)
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
