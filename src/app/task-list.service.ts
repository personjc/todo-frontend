import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { TaskList } from './task-list';
import { Observable, of } from 'rxjs';

@Injectable()
export class TaskListService {
  private url = 'http://localhost:8085/api/v1/task-list';

  constructor(private http: HttpClient) { }

  getAllTaskLists(): Observable<HttpResponse<TaskList[]>> {
    return this.http.get<TaskList[]>(this.url, {observe: 'response'})
   }

  // getTaskById(id: any) {
  //   return this.http.get<Task>(this.url + '/' + id).pipe
  // }

   addTaskList(listName: String) {
    return this.http.post(this.url, {name: listName});
   }

   deleteTask(taskListId: String){
    return this.http.delete(this.url + '/' + taskListId);
   }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    console.log(message);
  }
}
