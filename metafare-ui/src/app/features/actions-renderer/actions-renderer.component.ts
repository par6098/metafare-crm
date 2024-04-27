
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
  selector: 'app-actions-renderer',
  template: '<button (click)="onClick()"><mat-icon>edit</mat-icon></button>'+
  '<button (click)="onClick()"><mat-icon>delete</mat-icon></button>',
  styleUrl: './actions-renderer.component.scss'
})
export class ActionsRendererComponent implements ICellRendererAngularComp {
    public params: any;
    

  
    agInit(params: any): void {
      this.params = params;
    }
  
    refresh(params: any): boolean {
      return false;
    }
  
    onClick(): void {
      
if (this.params.onClick instanceof Function) {
        const event = {
          type: 'click',
          rowIndex: this.params.node.rowIndex,
          rowData: this.params.node.data
        };
        console.log("Clicked here! "+event.rowIndex);
        console.log("Clicked here! "+event.rowData);
        this.params.onClick(event);
      }
    }
}
