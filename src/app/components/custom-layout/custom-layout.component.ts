import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {
  isChecked: boolean = false;
  mode: string = '';

 sideBarOpen = true;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  sidebarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

 changed(event: MatSlideToggleChange): void{

 }

}
