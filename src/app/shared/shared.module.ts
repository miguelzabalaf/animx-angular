import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CustomLoadingComponent
  ]
})
export class SharedModule { }
