import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCharacterComponent } from './details-character/details-character.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailsCharacterRoutingModule } from './details-character/details-character-routing.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [
  
    DetailsCharacterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DetailsCharacterRoutingModule,
    PipesModule
  ],
  exports: [
    DetailsCharacterComponent
  ]
})
export class DetailsCharacterModule { }
