import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoStatusPipe } from './logo-status.pipe';



@NgModule({
  declarations: [
    LogoStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoStatusPipe
  ]
})
export class PipesModule { }
