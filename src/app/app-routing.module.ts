import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes : Routes =[
  {path:'addTask', component:AddTaskComponent},
  {path:'viewTask',component:ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
