import { TestBed } from '@angular/core/testing';

import { NewItemQuestionService } from './new-item-question.service';

describe('NewItemQuestionService', () => {
  let service: NewItemQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewItemQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
