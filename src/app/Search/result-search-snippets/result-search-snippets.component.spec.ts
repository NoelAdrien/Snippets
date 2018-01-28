import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchSnippetsComponent } from './result-search-snippets.component';

describe('ResultSearchSnippetsComponent', () => {
  let component: ResultSearchSnippetsComponent;
  let fixture: ComponentFixture<ResultSearchSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
