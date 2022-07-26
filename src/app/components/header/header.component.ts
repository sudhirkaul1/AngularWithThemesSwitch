import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isChecked: boolean = false;
  mode: string = '';

@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }


  changed(event: MatSlideToggleChange): void{
    this.mode = event.checked ? 'light_mode' : 'nightlight_round'   ;
    document.body.classList.toggle('darkMode');
  }
}
