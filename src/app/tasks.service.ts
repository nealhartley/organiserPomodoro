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
  getTasks(): Promise<Task[]> {
    return this.http.get(this.taskUrl)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);
  }

  create(string: string): Promise<Task> {
    return this.http
      .post(this.taskUrl, JSON.stringify({task: string}), { headers: this.headers})
      .toPromise()
      .then(response => response.json() as Task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error); // for demo only
    return Promise.reject(error.message || error);
  }



}

