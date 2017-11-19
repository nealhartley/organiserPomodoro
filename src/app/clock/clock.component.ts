import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  title: string;
  tasks: Task[];

  numbersForTimerSelect: number[] = [];

  clock;
  counter = 45;
  currentTask = {task: "press button to be assigned a task task"};

  constructor(private _tasksService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();


    for (let i = 0; i < 60 ; i++) {
      this.numbersForTimerSelect[i] = i + 1;
    }
    console.log(this.numbersForTimerSelect.toString());
  }

  getTasks() {
    this._tasksService.getTasks().then(tasks => this.tasks = tasks);
  }

  getTask(): Task {
    console.log("getting a task");
    const task = this.tasks[Math.floor(Math.random() * (this.tasks.length))]; // [Math.random() * (this.tasks.length - 1)]
    console.log(Math.floor(Math.random() * (this.tasks.length)));
    console.log(task.task);
    return task; // 0, this.tasks.length
  }

  startTimer(): void {
    this.getTasks();
    this.setTimer(document.getElementById('selectTimer'));

    this.clock = Observable.timer(0, 1000 * 60)
      .take(this.counter)
      .map(() => --this.counter);
      this.currentTask = this.getTask();

  }

  setTimer(elem): void {
    this.counter =  elem.value;
    console.log('timer set');
  }
}
