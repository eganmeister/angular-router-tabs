import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabBodyComponent } from './tab-body.component';
import { NewTabGuard } from './new-tab.guard';

const routes: Routes = [
  {
    path: '',
    component: TabBodyComponent
  },
  {
    path: 'tabs/new/:app',
    canActivate: [NewTabGuard],
    component: TabBodyComponent
  },
  {
    path: 'tabs/:id',
    component: TabBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
