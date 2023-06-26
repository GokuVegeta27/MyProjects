import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-material-pass',
  templateUrl: './material-pass.component.html',
  styleUrls: ['./material-pass.component.css']
})
export class MaterialPassComponent implements OnInit {
  form!: FormGroup;
  filePreview: string | ArrayBuffer | null = '';
  picturePreview: string | ArrayBuffer | null = '';
  constructor(private DatePipe: DatePipe, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      driverName: new FormControl(),
      driverContact: new FormControl(),
      driverId: new FormControl(),
      materialType: new FormControl(),
      passId: new FormControl(),
      visitPlace: new FormControl(),
      vechileName: new FormControl(),
      vechileType: new FormControl(),
      vechileNumber: new FormControl(),
      vechileColor: new FormControl(),
      vechileImage: new FormControl(),
      vechileDocument: new FormControl(),
      visitDate: new FormControl(),
      visitTime: new FormControl()
    })

    // to get the current date and time 
    setInterval(() => {
      let time = this.DatePipe.transform(new Date(), 'HH:mm:ss ')
      let date = this.DatePipe.transform(new Date(), 'dd/MM/yyyy');
      this.form.controls['visitTime'].setValue(time)
      this.form.controls['visitDate'].setValue(date)
    }, 1000)
  }


  // to set the select vechile image for preview 
  selectImage(e: any) {
    const file = e.target.files[0];
    if (file) {
      this.form.controls['vechileImage'].setValue(file.name)
      const reader = new FileReader();
      reader.onload = () => {
        this.picturePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  // to set the select document image for preview 

  selectDocImage(e: any) {
    const file = e.target.files[0];
    if (file) {
      this.form.controls['vechileDocument'].setValue(file.name)
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  seletIdProof(e: any) {
    const file = e.target.files[0];
    if (file) {
      this.form.controls['driverId'].setValue(file.name);
    }
  }

  submitForm() {
    console.log(this.form.value)
  }
}
