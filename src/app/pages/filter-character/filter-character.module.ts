import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCharacterComponent } from './filter-character/filter-character.component';
import { FilterCharacterRoutingModule } from './filter-character/filter-character-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterCharacterComponent
  ],
  imports: [
    CommonModule,
    FilterCharacterRoutingModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule
  ],
  exports:[
    FilterCharacterComponent
  ]
})
export class FilterCharacterModule { }
