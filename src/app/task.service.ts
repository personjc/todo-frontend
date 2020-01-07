import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable()
export class TaskService {
  private url = 'http://localhost:8085/api/v1/task';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<HttpResponse<Task[]>> {
    return this.http.get<Task[]>(this.url, {observe: 'response'})
   }

  // getTaskById(id: any) {
  //   return this.http.get<Task>(this.url + '/' + id).pipe
  // }

   addTask(task: String) {
    return this.http.post(this.url, {description: task});
   }

   deleteTask(taskId: String){
    return this.http.delete(this.url + '/' + taskId);
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
