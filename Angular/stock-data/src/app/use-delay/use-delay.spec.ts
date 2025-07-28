import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDelay } from './use-delay';

describe('UseDelay', () => {
  let component: UseDelay;
  let fixture: ComponentFixture<UseDelay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseDelay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDelay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
