import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowNodeOuputPortComponent } from './dataflow-node-ouput-port.component';

describe('DataflowNodeOuputPortComponent', () => {
  let component: DataflowNodeOuputPortComponent;
  let fixture: ComponentFixture<DataflowNodeOuputPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataflowNodeOuputPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataflowNodeOuputPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
