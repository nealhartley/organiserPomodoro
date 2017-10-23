import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TaskInterfaceComponent } from './task-interface/task-interface.component';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TaskInterfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
