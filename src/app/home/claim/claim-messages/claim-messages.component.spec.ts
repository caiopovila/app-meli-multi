import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMessagesComponent } from './claim-messages.component';

describe('ClaimMessagesComponent', () => {
  let component: ClaimMessagesComponent;
  let fixture: ComponentFixture<ClaimMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
