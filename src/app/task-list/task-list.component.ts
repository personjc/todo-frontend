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
  newTask: String;

  constructor(private taskService: TaskService){
    this.getAllTasks();
  }

  private addTask(){
    this.taskService.addTask(this.newTask).toPromise()
      .then(res => this.getAllTasks());
      this.newTask = ' ';
  }

  private deleteTask(taskId){
    this.taskService.deleteTask(taskId).toPromise()
      .then(res => this.getAllTasks());
  }

  private getAllTasks(){
    this.tasks = [];

    this.taskService.getAllTasks().
      subscribe(response => {
        console.log(response);
        
        console.log(response.body);
        for(const data of response.body) {
          this.tasks.push(data);
        }
    });

    console.log('Tasks Returned');
  }

}
