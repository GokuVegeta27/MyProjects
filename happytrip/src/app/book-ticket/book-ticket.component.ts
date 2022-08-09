import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookinginfoService } from 'src/services/bookinginfo.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  travelForm!:FormGroup;
  submitted=false;


  constructor(private bookin_api:BookinginfoService,private formBuilder:FormBuilder) {
   // this.trForm();
   }

  ngOnInit(): void {
    this.travelForm=this.formBuilder.group({
      FName:new FormControl('',Validators.required),
      LName:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      nation:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      MobileNo:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
    })


  
   
  }
get f() {
  return this.travelForm.controls;
}
 
  
  onSubmit(){
   this.submitted=true;
   if(this.travelForm.invalid){
    return;
   }

  }
}
