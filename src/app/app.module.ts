import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TaskInterfaceComponent } from './task-interface/task-interface.component';
import { TasksService } from './tasks.service';

import { HttpModule } from '@angular/http';
// imports for loading in memory data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TaskInterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
