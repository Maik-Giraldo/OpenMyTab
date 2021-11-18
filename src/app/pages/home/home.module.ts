import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule, 
    DirectivesModule
  ]
})
export class HomeModule { }
