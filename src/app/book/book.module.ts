import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
     BookComponent ],
  imports: [
    BookRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    MatSliderModule,
    TableModule,
    CardModule,
    DividerModule,
  ]
})

export class BookModule { }
