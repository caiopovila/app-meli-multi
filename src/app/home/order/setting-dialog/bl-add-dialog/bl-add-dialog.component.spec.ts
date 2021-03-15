import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlAddOrderDialogComponent } from './bl-add-dialog.component';

describe('BlAddDialogComponent', () => {
  let component: BlAddOrderDialogComponent;
  let fixture: ComponentFixture<BlAddOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlAddOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlAddOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
