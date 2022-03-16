import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskOj: Task = new Task();
  taskList: Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.addTaskValue = '';
    this.editTaskValue = '';
    this.taskList = [];
    this.taskOj = new Task();
    this.getAllTasks();
  }

  addTask() {
    this.taskOj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskOj).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
        this.addTaskValue = '';
      },
      (err) => {
        alert('Error on adding task. Try again later');
      }
    );
  }
  callTask(task: Task) {
    this.taskOj = task;
    this.editTaskValue = task.task_name;
  }
  getAllTasks() {
    this.crudService.getAllTasks().subscribe(
      (res) => {
        this.taskList = res;
      },
      (err) => {
        alert(err);
      }
    );
  }
  editTask() {
    this.taskOj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskOj).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('Failed to update task');
      }
    );
  }
  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('Cannot delete task');
      }
    );
  }
}
