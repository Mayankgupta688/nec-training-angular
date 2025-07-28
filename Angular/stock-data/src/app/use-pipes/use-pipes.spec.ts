import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePipes } from './use-pipes';

describe('UsePipes', () => {
  let component: UsePipes;
  let fixture: ComponentFixture<UsePipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsePipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsePipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
