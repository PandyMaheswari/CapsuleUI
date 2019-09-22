import { Component, OnInit } from '@angular/core';
import { TaskVO } from '../taskVO'
import { ConnectService } from '../connectService';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  ngOnInit() {
  }
sucessMsg='';
  task: TaskVO=new TaskVO();
  constructor(private service:  ConnectService){}
addTask(){
  this.task.taskId=121;
  this.service.addTask(this.task).subscribe(msg=>{
 console.log(msg);
 this.sucessMsg='Task Id :inserted successfully';
  });
}
  

}
