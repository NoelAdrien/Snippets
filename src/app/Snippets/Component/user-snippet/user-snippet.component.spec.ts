import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSnippetComponent } from './user-snippet.component';

describe('UserSnippetComponent', () => {
  let component: UserSnippetComponent;
  let fixture: ComponentFixture<UserSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
