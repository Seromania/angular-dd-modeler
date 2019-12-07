import { Component, OnInit, ElementRef } from '@angular/core';
import { DataflowNodeComponent } from '../dataflow-node/dataflow-node.component';

@Component({
  selector: 'app-default-functionblock-node',
  templateUrl: './default-functionblock-node.component.html',
  styleUrls: ['./default-functionblock-node.component.css']
})
export class DefaultFunctionblockNodeComponent extends DataflowNodeComponent implements OnInit {

  constructor(private elementRef2: ElementRef) {
    super(elementRef2);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

}
