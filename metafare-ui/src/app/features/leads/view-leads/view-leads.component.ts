import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {

  rowData: any = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { id: 3, name: 'Emily Brown', email: 'emily.brown@example.com', status: 'Active' },
    { id: 4, name: 'Michael Johnson', email: 'michael.johnson@example.com', status: 'Inactive' }
  ];

  columnDefs: any = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Status', field: 'status' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
