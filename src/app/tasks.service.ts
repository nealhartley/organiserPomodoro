import { Injectable } from '@angular/core';
import { Task } from './tasks';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TasksService {

  private taskUrl = 'api/tasks'; // url to web api... TODO work out how this works
  private headers = new Headers({'Content-Type': 'application.json'});

  constructor(private http: Http) {}


  // TODO Create methods for a) fetching b) adding

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

