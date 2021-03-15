import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlAddDialogComponent } from './bl-add-dialog.component';

describe('BlAddDialogComponent', () => {
  let component: BlAddDialogComponent;
  let fixture: ComponentFixture<BlAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
