import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFunctionblockNodeComponent } from './default-functionblock-node.component';

describe('DefaultFunctionblockNodeComponent', () => {
  let component: DefaultFunctionblockNodeComponent;
  let fixture: ComponentFixture<DefaultFunctionblockNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFunctionblockNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFunctionblockNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
