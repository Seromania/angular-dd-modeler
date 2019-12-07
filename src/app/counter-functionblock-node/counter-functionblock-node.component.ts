import { Component, OnInit, ElementRef } from '@angular/core';
import { DataflowNodeComponent } from '../dataflow-node/dataflow-node.component';

@Component({
  selector: 'app-counter-functionblock-node',
  templateUrl: './counter-functionblock-node.component.html',
  styleUrls: ['./counter-functionblock-node.component.css']
})
export class CounterFunctionblockNodeComponent extends DataflowNodeComponent implements OnInit {

  constructor(private elementRef2: ElementRef) {
    super(elementRef2);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

}
