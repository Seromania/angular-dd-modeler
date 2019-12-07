import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFunctionblockNodeComponent } from './counter-functionblock-node.component';

describe('CounterFunctionblockNodeComponent', () => {
  let component: CounterFunctionblockNodeComponent;
  let fixture: ComponentFixture<CounterFunctionblockNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterFunctionblockNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFunctionblockNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
