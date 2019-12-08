import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dataflow-node-input-port',
  templateUrl: './dataflow-node-input-port.component.html',
  styleUrls: ['./dataflow-node-input-port.component.css']
})
export class DataflowNodeInputPortComponent implements OnInit {
  @Input() public portName: string;

  public ngOnInit(): void {
  }

}
