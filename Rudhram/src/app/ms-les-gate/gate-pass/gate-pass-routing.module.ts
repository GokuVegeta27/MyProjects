import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialPassComponent } from './material-pass/material-pass.component';

const routes: Routes = [
  { path: '', component: MaterialPassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatePassRoutingModule { }
