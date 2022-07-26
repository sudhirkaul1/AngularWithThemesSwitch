import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.scss']
})
export class SlidenavComponent implements OnInit {
  BooksIcon: string = "add";
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
