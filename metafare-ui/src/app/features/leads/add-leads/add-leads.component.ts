import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrl: './add-leads.component.scss'
})
export class AddLeadsComponent implements OnInit {
  leadForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.leadForm = {} as FormGroup;  // Initialize as empty object
   }
  ngOnInit(): void {
    //this.initializeForm();
    this.leadForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+?[0-9]+'), Validators.minLength(10), Validators.maxLength(15)]]
    });
  }
  
  get email() {
    return this.leadForm.get('email');
  }

  get phone() {
    return this.leadForm.get('phone');
  }
}
