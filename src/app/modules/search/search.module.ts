import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
