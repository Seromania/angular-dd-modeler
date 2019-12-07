import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MyNodeModel} from '../app.component.ts';
@Component({
  selector: 'app-erster',
  templateUrl: './erster.component.html',
  styleUrls: ['./erster.component.css']
})
export class ErsterComponent implements OnInit {
  @Input() model: MyNodeModel;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    setTimeout(() =>  this.model._modelId = this.elementRef.nativeElement.id);
    //this.elementRef.nativeElement.style.left = this.model.position.x + 'px';
    //this.elementRef.nativeElement.style.top = this.model.position.y + 'px';
  }

}