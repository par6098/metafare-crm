import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


interface IRow {
  company: string;
  location: string;
  price: number;
  successful: boolean;
}

interface CustomButtonParams extends ICellRendererParams {
  onClick: () => void;
}
@Component({
  selector: 'app-button-renderer',
  template: '<button (click)="onClick()">Action</button>',
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  onClick!: () => void
  agInit(params: CustomButtonParams): void {
    this.onClick = params.onClick
  }
  refresh(params: CustomButtonParams) {
    return true;
  }
}
