import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {AddnewComponent} from './addnew/addnew.component'
import{SchedulelistComponent} from './schedulelist/schedulelist.component'
import{AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:'addnew',component:AddnewComponent},
  {path:'listall',component:SchedulelistComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'about', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
