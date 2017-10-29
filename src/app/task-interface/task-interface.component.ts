import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import {Task} from '../tasks';

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

  ngOnInit() {
    this.title = this._tasksService.someMethod();
    this.tasks = this._tasksService.get();
    console.log('rebooting');
  }

  push(val): void {
    this._tasksService.add(val);
  }
}
