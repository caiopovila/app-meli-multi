import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClaimDialogComponent } from './filter-claim-dialog.component';

describe('FilterClaimDialogComponent', () => {
  let component: FilterClaimDialogComponent;
  let fixture: ComponentFixture<FilterClaimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClaimDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClaimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
