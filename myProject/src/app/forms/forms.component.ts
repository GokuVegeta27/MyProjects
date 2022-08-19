import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formValue!:FormGroup;
  employeeObj:EmployeeModel=new EmployeeModel();
  EmployeeData!:any;


  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']

    })
    this.getAllEmployee();
  }
postEmployeeDetails(){
  this.employeeObj.firstName=this.formValue.value.firstName;
  this.employeeObj.lastName=this.formValue.value.lastName;
  this.employeeObj.email=this.formValue.value.email;
  this.employeeObj.mobile=this.formValue.value.mobile;
  this.employeeObj.salary=this.formValue.value.salary;

  this.api.postEmployee(this.employeeObj)
  .subscribe(res=>{
    console.log(res);
    alert("Employee Added Successfully");
    let ref =document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  },
  err=>{
    alert("Something Went Wrong");
  }
  )
}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.EmployeeData=res;
  })
}
deleteEmployee(surendhar:any){
  this.api.deleteEmployee(surendhar.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}
}
