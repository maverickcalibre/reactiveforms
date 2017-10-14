import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder) { }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    populateTestData(): void{
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            // email: 'jack@torchwood.com',
            sendCatalog: false
        })
    }
    
    ngOnInit(): void{

        this.customerForm = this.fb.group({
            firstName: {value:'Noor', disabled:true},
            lastName: {value:'Shaikh', disabled:false},
            email: '',
            sendCatalog: true
        });

        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // });
    }

 }
