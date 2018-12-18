import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticiableComponent } from './justiciable.component';

describe('JusticiableComponent', () => {
  let component: JusticiableComponent;
  let fixture: ComponentFixture<JusticiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JusticiableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JusticiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
