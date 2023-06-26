import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { GatePassRoutingModule } from './gate-pass-routing.module';
import { MaterialPassComponent } from './material-pass/material-pass.component';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    MaterialPassComponent
  ],
  imports: [
    CommonModule,
    GatePassRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonToggleModule,
    FlexLayoutModule
  ],
  providers:[DatePipe]
})
export class GatePassModule { }
