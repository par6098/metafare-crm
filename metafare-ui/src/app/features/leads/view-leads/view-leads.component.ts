import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ActionsRendererComponent } from '../../actions-renderer/actions-renderer.component';
import { selectRows } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent {
  api: any;

  //constructor()
  //{
    //this.frameworkComponents = {
      //buttonRenderer: ButtonRendererComponent,
    //}
  //}

  /*frameworkComponents: any = {
    buttonRenderer: ButtonRendererComponent,
  }*/
  frameworkComponents: any = {
    actionRenderer: ActionsRendererComponent,
  }
  
  rowData: any = [
    { id: 1, name: 'John Doe', title: 'VP Sales', company: 'Vodafone', phone: '9988704106', email:'parvinder.chopra@gmail.com', leadStatus:'Open', createdOn:'', createdBy:'John Doe', Actions:'test' },
    { id: 1, name: 'John Doe', title: 'VP Sales', company: 'Vodafone', phone: '9988704106', email:'parvinder.chopra@gmail.com', leadStatus:'Open', createdOn:'', createdBy:'John Doe', Actions:'test' },
    { id: 1, name: 'John Doe', title: 'VP Sales', company: 'Vodafone', phone: '9988704106', email:'parvinder.chopra@gmail.com', leadStatus:'Open', createdOn:'', createdBy:'John Doe', Actions:'test' },
    { id: 1, name: 'John Doe', title: 'VP Sales', company: 'Vodafone', phone: '9988704106', email:'parvinder.chopra@gmail.com', leadStatus:'Open', createdOn:'', createdBy:'John Doe', Actions:'test' },
  ];
  

  columnDefs: any = [
    { headerName: 'ID', field: 'id', filter: false },
    { headerName: 'Full Name', field: 'name' },
    { headerName: 'Email', field: 'title' },
    { headerName: 'Company', field: 'company' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Email Address', field: 'email' },
    { headerName: 'Lead Status', field: 'leadStatus' },
    { headerName: 'Created', field: 'createdOn' },
    { headerName: 'Owner', field: 'createdBy' },
    {
      headerName: 'Actions', filter: false,
      cellRenderer: ActionsRendererComponent,
      width: 200,
      cellRendererParams: {
        onClick: this.onClick.bind(this)
      }
    }
  ];

  paginationPageSize = 10; // number of rows per page
  pagination = true; // enable pagination
  suppressRowClickSelection = true; // suppress row click selection
  defaultColDef = {
    sortable: true,
    filter: true
  };

  constructor() { }

  ngOnInit(): void {
  }
  onClick(type: string, id: number): void {
    if (type === 'edit') {
      console.log('Edit clicked for ID:', id);
    } else if (type === 'delete') {
      console.log('Delete clicked for ID:', id);
    }
  }

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


  // ag-grid.component.ts
  onGridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }
}
