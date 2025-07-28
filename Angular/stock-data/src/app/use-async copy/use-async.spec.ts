import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAsync } from './use-async';

describe('UseAsync', () => {
  let component: UseAsync;
  let fixture: ComponentFixture<UseAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseAsync]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseAsync);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
