import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'edit/:id',component: EditComponent },
  { path: 'view/:id',component: ViewComponent },
  { path: 'pets',component: HomeComponent },
  { path: 'new',component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
