import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengDynamicComponent } from './primeng-dynamic/primeng-dynamic.component';
import {TableModule} from 'primeng/table';
import { PrimengPaginationComponent } from './primeng-pagination/primeng-pagination.component';

import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    PrimengDynamicComponent,
    PrimengPaginationComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule
  ],
  exports:[
    PrimengDynamicComponent,
    PrimengPaginationComponent
  ]
})
export class PrimengTableModule { }
