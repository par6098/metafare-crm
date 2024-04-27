import { Component } from '@angular/core';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'metafare-ui';
  //frameworkComponents: any;
  api: any;

  constructor()
  {
    //this.frameworkComponents = {
      //buttonRenderer: ButtonRendererComponent,
    //}
  }

  /*frameworkComponents: any = {
    buttonRenderer: ButtonRendererComponent,
  }*/

   columnDefs: any = [
  { headerName: 'Make', field: 'make', editable: true },
  { headerName: 'Model', field: 'model', editable: true },
  { headerName: 'Price', field: 'price', editable: true },
  {    headerName: 'Action', cellRenderer: ButtonRendererComponent}
  ,
  {
    headerName: 'Save',
    //cellRenderer: 'buttonRenderer',
    cellRendererFramework: ButtonRendererComponent,
    cellRendererParams: {
    onClick: this.onSaveButtonClick.bind(this),
    label: 'Save'
    },
  },
  {
    headerName: 'Delete',
    //cellRenderer: 'buttonRenderer',
    cellRendererFramework: ButtonRendererComponent,
    cellRendererParams: {
    onClick: this.onDeleteButtonClick.bind(this),
    label: 'Delete'
    },
  },
];

onRowEditingStopped(params: any)
{
  debugger;
}

onEditButtonClick(params: any)
{
 this.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: 'make'
  });
}

onSaveButtonClick(params: any)
{
 this.api.stopEditing();
}

onDeleteButtonClick(params: any)
{
  debugger;
 this.api.updateRowData({remove: [params.data]});
}

onGridReady(params: any)
{
  this.api = params.api;
}


    rowData: any = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}
