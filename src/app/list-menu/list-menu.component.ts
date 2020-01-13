import { Component, OnInit } from '@angular/core';
import { TaskList } from '../task-list';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {

  lists: TaskList[] = [];
  newList: String;

  constructor(private taskListService: TaskListService){
    this.getAllTaskLists();
  }

  private addTask(){
    this.taskListService.addTaskList(this.newList).toPromise()
      .then(res => this.getAllTaskLists());
      this.newList = ' ';
  }

  private deleteTask(taskId){
    this.taskListService.deleteTask(taskId).toPromise()
      .then(res => this.getAllTaskLists());
  }

  private getAllTaskLists(){
    this.lists = [];

    this.taskListService.getAllTaskLists().
      subscribe(response => {
        console.log(response);
        
        console.log(response.body);
        for(const data of response.body) {
          this.lists.push(data);
        }
    });
  }

}
