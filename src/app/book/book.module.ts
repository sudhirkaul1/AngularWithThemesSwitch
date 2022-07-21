import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
     BookComponent ],
  imports: [
    BookRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    MatSliderModule,
  ]
})

export class BookModule { }
