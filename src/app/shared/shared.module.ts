import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';
import { MenuResponsiveComponent } from './menu-responsive/menu-responsive.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomLoadingComponent,
    MenuResponsiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CustomLoadingComponent,
    MenuResponsiveComponent
  ]
})
export class SharedModule { }
