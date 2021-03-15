import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpItemDialogComponent } from './up-item-dialog.component';

describe('UpItemDialogComponent', () => {
  let component: UpItemDialogComponent;
  let fixture: ComponentFixture<UpItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
