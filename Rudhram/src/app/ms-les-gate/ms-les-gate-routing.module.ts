import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  loadChildren: () => import('./gate-pass/gate-pass.module').then(m => m.GatePassModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsLesGateRoutingModule { }
