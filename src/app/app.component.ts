import { Component, ViewChild, ElementRef } from '@angular/core';
import { IMyNodeModel } from './models/mynode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: IMyNodeModel[] = [
    {
      test: 'Angular 1',
      category: 'test',
      position: {
        x: '0px',
        y: '0px'
      },
      arrayTest: []
    },
    {
      test: 'Angular 2',
      category: '',
      position: {
        x: '100px',
        y: '0px'
      },
      arrayTest: []
    },
    {
      test: 'Angular 3',
      category: 'test',
      position: {
        x: '20px',
        y: '150px'
      },
      arrayTest: [
        {
          arrayText: '1'
        },
        {
          arrayText: '2'
        }
      ]
    }
  ];

  @ViewChild('boundValue', { static: true }) private inputElement: ElementRef;

  public onInputChanged(): void {
    this.model[0].test = this.inputElement.nativeElement.value;
  }
}
