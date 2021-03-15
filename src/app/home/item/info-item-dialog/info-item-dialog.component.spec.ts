import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoItemDialogComponent } from './info-item-dialog.component';

describe('InfoItemDialogComponent', () => {
  let component: InfoItemDialogComponent;
  let fixture: ComponentFixture<InfoItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
