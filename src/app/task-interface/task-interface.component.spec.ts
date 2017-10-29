import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInterfaceComponent } from './task-interface.component';

describe('TaskInterfaceComponent', () => {
  let component: TaskInterfaceComponent;
  let fixture: ComponentFixture<TaskInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
