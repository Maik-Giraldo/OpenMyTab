import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterGuard } from '../guards/character.guard';
import { DetailsCharacterComponent } from './details-character.component';

const routes: Routes = [{
    path : '',
    component : DetailsCharacterComponent,
    canActivate : [CharacterGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCharacterRoutingModule { }
