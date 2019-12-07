import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataflowNodeComponent } from './dataflow-node.component';

describe('DataflowNodeComponent', () => {
  let component: DataflowNodeComponent;
  let fixture: ComponentFixture<DataflowNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataflowNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataflowNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
