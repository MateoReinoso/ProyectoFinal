import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentI } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentI;
  let fixture: ComponentFixture<HeaderComponentI>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponentI ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
