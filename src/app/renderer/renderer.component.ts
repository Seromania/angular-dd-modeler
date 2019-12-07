import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { IMyNodeModel } from '../models/mynode.model';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  @Input() public model: IMyNodeModel[];
  @ViewChild('templateRenderer', {static: true}) private renderArea: ElementRef;

  private isMouseDown = false;
  private elementOffset: {
    xOffset: number;
    yOffset: number;
  } = {
    xOffset: 0,
    yOffset: 0
  };
  private selectedModel: IMyNodeModel;
  private selectedModelElement: HTMLElement;

  public ngOnInit(): void {
  }

  public mouseUp(event: MouseEvent): void {
    event.preventDefault();

    this.isMouseDown = false;
    this.selectedModel = undefined;
    this.selectedModelElement = undefined;
  }

  public mouseDown(event: MouseEvent, model: IMyNodeModel): void {
    event.preventDefault();

    if (model === undefined || model === null) {
      // tslint:disable-next-line:no-console
      console.log('no model');
      return;
    }

    this.isMouseDown = true;
    this.elementOffset = {
      xOffset: parseInt(model.position.x, 10) - event.clientX,
      yOffset: parseInt(model.position.y, 10) - event.clientY
    };

    this.selectedModel = model;
    this.selectedModelElement = document.querySelector(
      `#${this.selectedModel._modelId}`
    );
    // tslint:disable-next-line:no-console
    console.log('MouseDown', this.selectedModel._modelId , this.selectedModelElement);
  }

  public mouseMove(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.isMouseDown) {
      const mousePosition = {
        x: event.clientX,
        y: event.clientY
      };

      const newXPosition = mousePosition.x + this.elementOffset.xOffset;
      const newYPosition = mousePosition.y + this.elementOffset.yOffset;

      if (
        this.checkIfWithinXBounds(
          newXPosition,
          this.selectedModelElement.offsetWidth
        )
      ) {
        this.selectedModel.position.x = `${mousePosition.x + this.elementOffset.xOffset}px`;
      }

      if (
        this.checkIfWithinYBounds(
          newYPosition,
          this.selectedModelElement.offsetHeight
        )
      ) {
        this.selectedModel.position.y = `${mousePosition.y + this.elementOffset.yOffset}px`;
      }

      if (this.selectedModel.position.x.startsWith('undefined')) {
        this.selectedModel.position.x = '0px';
      }
      if (this.selectedModel.position.y.startsWith('undefined')) {
        this.selectedModel.position.y = '0px';
      }
    }
  }

  private checkIfWithinXBounds(xPosition: number, width: number): boolean {
    return xPosition >= 0 &&
      xPosition + width < this.renderArea.nativeElement.offsetWidth;
  }

  private checkIfWithinYBounds(yPosition: number, height: number): boolean {
    return yPosition >= 0 &&
      yPosition + height < this.renderArea.nativeElement.offsetHeight;
  }
}
