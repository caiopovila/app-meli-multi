import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlRmDialogComponent } from './bl-rm-dialog.component';

describe('BlRmDialogComponent', () => {
  let component: BlRmDialogComponent;
  let fixture: ComponentFixture<BlRmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlRmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlRmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
