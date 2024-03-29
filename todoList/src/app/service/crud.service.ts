import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from './../model/task'

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  serviceUrl: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serviceUrl, task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.serviceUrl + '/' + task.id);
  }
  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.serviceUrl + '/' + task.id, task);
  }
}
