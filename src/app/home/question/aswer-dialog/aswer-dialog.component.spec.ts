import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswerDialogComponent } from './aswer-dialog.component';

describe('AswerDialogComponent', () => {
  let component: AswerDialogComponent;
  let fixture: ComponentFixture<AswerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AswerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
