import {Component, ViewChild, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customerData: Customer
  edit: Boolean
  hiredServices: any
  displayedColumns: string[] = ['scheduled_date', 'amount', 'price'];

  @ViewChild('customerForm', {static: false})
  customerForm!: NgForm;

  constructor(private customerService: CustomerService) {
    this.customerData = {} as Customer
    this.edit = false

    this.hiredServices = [
      {scheduled_date: "19/04/2023", amount: 2, price: 150.75},
      {scheduled_date: "25/04/2023", amount: 1, price: 99.00},
    ]
  }

  ngOnInit(): void {
    this.customerService.getById(1).subscribe((response: any) => {
      this.customerData = response
    })

  }

  editCustomer(): void {
    this.edit = true
  }

  onSubmit() {
    this.customerService.update(this.customerData.id, this.customerData).subscribe((response: any) => {
      this.customerData = response
      this.edit = false
    });
  }
}
