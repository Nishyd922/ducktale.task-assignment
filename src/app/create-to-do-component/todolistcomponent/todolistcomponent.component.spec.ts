import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistcomponentComponent } from './todolistcomponent.component';

describe('TodolistcomponentComponent', () => {
  let component: TodolistcomponentComponent;
  let fixture: ComponentFixture<TodolistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
