import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-amexio-reactive-forms',
  templateUrl: './amexio-reactive-forms.component.html',
  styleUrls: ['./amexio-reactive-forms.component.css']
})
export class AmexioReactiveFormsComponent implements OnInit {

  radioGroupData: any[] = [];
  departmentData: any;
  employeeForm: FormGroup;

  radioGroupData2: any[] = [];
  checkboxGroupdata: any[] = [];

  constructor(private fb: FormBuilder) {
    this.departmentData = [{
      'deptId': '1',
      'deptName': 'Engineering'
    }, {
      'deptId': '2',
      'deptName': 'Tech Suppport'
    }, {
      'deptId': '3',
      'deptName': 'HR'
    }]
    this.radioGroupData = [{
      genderName: 'Male',
      genderId: 'male'
    }, {
      genderName: 'Female',
      genderId: 'female'
    }];

   
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      Agree: ['', [Validators.required, Validators.requiredTrue]],
      Depart: ['', [Validators.required]],

    });
  }

  onClick(data:any){
    console.log("on click...")
    console.log(data.data.label)

  }
}