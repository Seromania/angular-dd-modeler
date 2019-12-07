import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { IMyNodeModel } from '../models/mynode.model';

@Component({
  selector: 'app-dataflow-node',
  templateUrl: './dataflow-node.component.html',
  styleUrls: ['./dataflow-node.component.css']
})
export class DataflowNodeComponent implements OnInit {
  @Input() public model: IMyNodeModel;

  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    setTimeout(() =>  {
      // tslint:disable-next-line:no-console
      console.log('set modelid', this.elementRef.nativeElement.id);
      this.model._modelId = this.elementRef.nativeElement.id;
    });
  }

}
