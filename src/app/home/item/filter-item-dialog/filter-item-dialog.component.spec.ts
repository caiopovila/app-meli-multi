import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemDialogComponent } from './filter-item-dialog.component';

describe('FilterItemDialogComponent', () => {
  let component: FilterItemDialogComponent;
  let fixture: ComponentFixture<FilterItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
