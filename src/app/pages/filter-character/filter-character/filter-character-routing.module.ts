import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterCharacterComponent } from './filter-character.component';

const routes: Routes = [{
    path : '',
    component : FilterCharacterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterCharacterRoutingModule { }
