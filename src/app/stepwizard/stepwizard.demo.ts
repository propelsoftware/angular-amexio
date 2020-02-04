/**
 * Created by kedar on 19/3/19.
 */

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AvailableSlotsModel } from 'amexio-ng-extensions';

@Component({
    selector: 'stepwizard-demo', templateUrl:'stepwizard.demo.html'
})
export class StepwizardDemo {
 
  userRegistration:UserRegistration;
  address:Address;
  payment:Payment;

  constructor() {
    this.userRegistration = new UserRegistration();
    this.address = new Address();
    this.payment= new Payment();
  }

  ngOnInit() {
  }

  finalStageClick(event:any) {

  }
}

export class UserRegistration {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  constructor() {
  }
}

export class Address {
  address1: string;
  pincode: string;
  constructor() {
  }
}

export class Payment {
  payment: string;
  constructor() {
  }
}