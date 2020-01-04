import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {

  tasks: Task[] = [];
  headers;

  constructor(private taskService: TaskService){
    this.taskService.getAllTasks().
      subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        this.headers = keys.map(key => 
          `${key}: ${response.headers.get(key)}`);

        for(const data of response.body) {
          this.tasks.push(data);
        }
    });
  }

}
