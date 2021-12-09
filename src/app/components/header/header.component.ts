import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Task Tracer"
  tasks: Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

  }

  addNewTask(){
    console.log("New Task Added");
  }

}
