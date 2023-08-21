/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Form_postComponent } from './Form_post.component';

describe('Form_postComponent', () => {
  let component: Form_postComponent;
  let fixture: ComponentFixture<Form_postComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form_postComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form_postComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
