import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOrderDialogComponent } from './message-order-dialog.component';

describe('MessageOrderDialogComponent', () => {
  let component: MessageOrderDialogComponent;
  let fixture: ComponentFixture<MessageOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
