import { Injectable } from '@angular/core';
import { Task } from './tasks';

@Injectable()

export class TasksService {

  private tasks: Task[] = [
    {task: 'washing'}
  ];

  add(val) {
    this.tasks.push({task: val});
    console.log("arrrrrr");
  }
  get() {
    return this.tasks;
  }

  someMethod() {
    return 'Yo!';
  }
}

