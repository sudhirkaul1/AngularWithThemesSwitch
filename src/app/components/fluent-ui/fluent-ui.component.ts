import { Component, OnInit } from '@angular/core';

import {
  provideFluentDesignSystem,
  fluentAccordion,
  fluentAccordionItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
  .register(
      fluentAccordion(),
      fluentAccordionItem()
  );

@Component({
  selector: 'app-fluent-ui',
  templateUrl: './fluent-ui.component.html',
  styleUrls: ['./fluent-ui.component.scss']
})
export class FluentUiComponent implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  title = 'fluent-angular';

  exampleTextField = '';

  onClick() {
    console.log(this.exampleTextField);
  }

}
