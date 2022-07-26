import { Component, OnInit, ViewChild } from '@angular/core';

import {
  provideFluentDesignSystem,
  fluentDataGridCell,
  fluentDataGridRow,
  fluentDataGrid,
  DataGrid,
  fluentCombobox,
  fluentSelect
} from "@fluentui/web-components";

import { css, observable } from '@microsoft/fast-element';

provideFluentDesignSystem()
  .register(
      fluentDataGridCell(),
      fluentDataGridRow(),
      fluentDataGrid(),
      fluentCombobox(),
      fluentSelect()
  );




@Component({
  selector: 'app-fluent-grid',
  templateUrl: './fluent-grid.component.html',
  styleUrls: ['./fluent-grid.component.scss']
})
export class FluentGridComponent implements OnInit {

  @ViewChild('shadow-root') shadowroot;

  defaultGridElement: DataGrid | null = null;

  populateDataGrid(){
  this.defaultGridElement = document.getElementById('defaultGrid') as DataGrid;

  this.defaultGridElement.rowsData = this.newDataSet(10);
  }



  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

    this.populateDataGrid();
  }

  newDataRow(id: string): object {
    return {
      rowId: `rowid-${id}`,
      item1: `value 1-${id}`,
      item2: `value 2-${id}`,
      item3: `value 3-${id}`,
      item4: `value 4-${id}`,
    }
  }

  newDataSet(rowCount: number): object[] {
    const newRows: object[] = [];
    for (let i = 0; i <= rowCount; i++) {
      newRows.push(this.newDataRow(`${i + 1}`));
    }
    return newRows;
  }




}

// export const AccentButtonStyles = css`
//   :host([appearance='accent']) {
//     background: ${accentFillRest};
//     color: ${foregroundOnAccentRest};
//   }
//   :host([appearance='accent']:hover) {
//     background: ${accentFillHover};
//   }
//   :host([appearance='accent']:active) .control:active {
//     background: ${accentFillActive};
//   }

//   :host([appearance='accent'][disabled]) {
//     opacity: ${disabledOpacity};
//     background: ${accentFillRest};
//   }
// `;
