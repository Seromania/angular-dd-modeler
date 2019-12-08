import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dataflow-node-ouput-port',
  templateUrl: './dataflow-node-ouput-port.component.html',
  styleUrls: ['./dataflow-node-ouput-port.component.css']
})
export class DataflowNodeOuputPortComponent implements OnInit {
  @Input() public portName: string;

  public ngOnInit(): void {
  }

}
