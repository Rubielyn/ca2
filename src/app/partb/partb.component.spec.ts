/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartbComponent } from './partb.component';

describe('PartbComponent', () => {
  let component: PartbComponent;
  let fixture: ComponentFixture<PartbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
