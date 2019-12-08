import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowNodeInputPortComponent } from './dataflow-node-input-port.component';

describe('DataflowNodeInputPortComponent', () => {
  let component: DataflowNodeInputPortComponent;
  let fixture: ComponentFixture<DataflowNodeInputPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataflowNodeInputPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataflowNodeInputPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
