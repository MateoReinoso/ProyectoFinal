import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentI } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponentI;
  let fixture: ComponentFixture<FooterComponentI>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponentI ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
