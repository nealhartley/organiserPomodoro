import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import {Task} from '../tasks';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-task-interface',
  templateUrl: './task-interface.component.html',
  styleUrls: ['./task-interface.component.css'],
  providers: []
})
export class TaskInterfaceComponent implements OnInit {
  // TASKS: string[] = tasks;

  title: String;
  tasks: Task[];
  constructor(private _tasksService: TasksService) {  }

  ngOnInit(): void {
    this.getTasks();
    console.log('rebooting');
  }

  getTasks() {
    this._tasksService.getTasks().then(tasks => this.tasks = tasks);
  }

  push(taskString: string): void {
    taskString = taskString.trim();
    if (!taskString) { return; }
    this._tasksService.create(taskString)
      .then(task => this.tasks.push(task));
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].print;
    }
  }

  delete(task: Task): void {

    if (this.tasks.length === 1 ){
      alert( 'You must have atleast one task at all times!. Add another task before you delete this one' );
      return;
    }

    this._tasksService
      .delete(task.id)
      .then(() => { this.tasks = this.tasks.filter( t => t !== task); } );
  }

}
