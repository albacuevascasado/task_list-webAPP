import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  faTimes = faTimes;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);

  }

  onDelete(task:Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }


  updateDetails(task:Task){
    //console.log(task.text);
    //task.text = "Business Meeting";
    //task.day = "December 11th at 9.00am";
    //this.taskService.updateTask(task).subscribe();
    
  }

  onToggle(task:Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  newTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }


}
