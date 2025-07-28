import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseObservable } from './use-observable';

describe('UseObservable', () => {
  let component: UseObservable;
  let fixture: ComponentFixture<UseObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
