import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-amexio';
  // for simple Reactive Form
  radioGroupData: any[] = [];
  employeeForm: FormGroup;
data:any;

constructor(private fb: FormBuilder) {
  
  this.radioGroupData = [{
    genderName: 'Male',
    genderId: 'male'
  }, {
    genderName: 'Female',
    genderId: 'female'
  }];

  // Demo1 : - Simple Reactive Form

  this.employeeForm = this.fb.group({
    FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    Email: ['', [Validators.required, Validators.email]],
    Age: ['', [Validators.required]],
    Gender: ['', [Validators.required]],
    Agree: ['', [Validators.required, Validators.requiredTrue]]
  });
}

  ngOnInit() {
    this.data = [
      {
        "userId": "10",
        "jobTitle": "Program Direct",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "salary": 14000000,
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
      },
      {
        "userId": "1",
        "jobTitle": "Team Lead",
        "firstName": "ketan",
        "lastName": "Gote",
        "salary": 22000000,
        "preferredFullName": "Ketan Gote",
        "employeeCode": "E1",
        "phoneNumber": "7687654768",
        "emailAddress": "ketan.gote.com"
      },
      {
        "userId": "10",
        "jobTitle": "Team Lead",
        "firstName": "Santosh",
        "lastName": "Gawade",
        "salary": 22000000,
        "preferredFullName": "Santosh Gawade",
        "employeeCode": "E1",
        "phoneNumber": "9877654768",
        "emailAddress": "Santosh.Gawade.com"
      },
      {
        "userId": "2",
        "jobTitle": "Developer",
        "firstName": "Dattaram",
        "lastName": "Gawas",
        "salary": 1000000,
        "preferredFullName": "Dattaram Gawas",
        "employeeCode": "E2",
        "phoneNumber": "9637167645",
        "emailAddress": "dattaram.gawas.com"
      },
      {
        "userId": "3",
        "jobTitle": "Developer",
        "firstName": "vrushabh",
        "lastName": "Kelwalkar",
        "preferredFullName": "vrushabh Kelwalkar",
        "employeeCode": "E3",
        "salary": 1500000,
        "phoneNumber": "8851855577",
        "emailAddress": "vrushabh.kelwalkar.com"
      },
      {
        "userId": "4",
        "jobTitle": "Developer",
        "firstName": "Sagar",
        "lastName": "Jadhav",
        "salary": 1500000,
        "preferredFullName": "Sagar Jadhav",
        "employeeCode": "E4",
        "phoneNumber": "8888688444",
        "emailAddress": "sagar.jadhav.com"
      },
      {
        "userId": "5",
        "jobTitle": "Developer",
        "firstName": "Sharad",
        "lastName": "Jadhav",
        "salary": 2000000,
        "preferredFullName": "Sharad Jadhav",
        "employeeCode": "E5",
        "phoneNumber": "8888648444",
        "emailAddress": "Sharad.jadhav.com"
      },
      {
        "userId": "6",
        "jobTitle": "Developer",
        "firstName": "Samadhan",
        "lastName": "Pardeshi",
        "salary": 2000000,
        "preferredFullName": "Samadhan Pardeshi",
        "employeeCode": "E6",
        "phoneNumber": "8888648444",
        "emailAddress": "Samadhan.Pardeshi.com"
      },
      {
        "userId": "7",
        "jobTitle": "Tester",
        "firstName": "Puja",
        "lastName": "patil",
        "salary": 600000,
        "preferredFullName": "puja Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888348444",
        "emailAddress": "puja.Patil.com"
      },
      {
        "userId": "8",
        "jobTitle": "Tester",
        "firstName": "Suraj",
        "lastName": "patil",
        "salary": 600000,
        "preferredFullName": "suraj Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888548444",
        "emailAddress": "suraj.Patil.com"
      },
      {
        "userId": "9",
        "jobTitle": "Tester",
        "firstName": "Sandip",
        "lastName": "patil",
        "salary": 600000,
        "preferredFullName": "sandip Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888548444",
        "emailAddress": "sandip.Patil.com"
      },
      {
        "userId": "10",
        "jobTitle": "Support",
        "firstName": "Satish",
        "lastName": "patil",
        "salary": 200000,
        "preferredFullName": "satish Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888548444",
        "emailAddress": "satish.Patil.com"
      },
      {
        "userId": "11",
        "jobTitle": "Tester",
        "firstName": "Sudhir",
        "lastName": "patil",
        "salary": 600000,
        "preferredFullName": "satish Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888548444",
        "emailAddress": "satish.Patil.com"
      },
      {
        "userId": "12",
        "jobTitle": "Support",
        "firstName": "Sudhir",
        "lastName": "patil",
        "salary": 300000,
        "preferredFullName": "Sudhir Patil",
        "employeeCode": "E6",
        "phoneNumber": "8888548444",
        "emailAddress": "Sudhir.Patil.com"
      },
      {
        "userId": "13",
        "jobTitle": "Support",
        "firstName": "Satish",
        "lastName": "Sawant",
        "salary": 300000,
        "preferredFullName": "Satish Sawant",
        "employeeCode": "E13",
        "phoneNumber": "8888548444",
        "emailAddress": "Satish.Sawant.com"
      },
      {
        "userId": "14",
        "jobTitle": "Support",
        "firstName": "Ajit",
        "lastName": "Sawant",
        "salary": 300000,
        "preferredFullName": "Ajit Sawant",
        "employeeCode": "E14",
        "phoneNumber": "8888548444",
        "emailAddress": "Ajit.Sawant.com"
      }
    ];
  }

  onRowSelect(data: any) {
    /* Do opertion on data */
  }  
}
