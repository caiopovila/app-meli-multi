import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlListDialogComponent } from './bl-list-dialog.component';

describe('BlListDialogComponent', () => {
  let component: BlListDialogComponent;
  let fixture: ComponentFixture<BlListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
