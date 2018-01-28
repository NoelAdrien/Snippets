import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSnippetsComponent } from './search-snippets.component';

describe('SearchSnippetsComponent', () => {
  let component: SearchSnippetsComponent;
  let fixture: ComponentFixture<SearchSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
