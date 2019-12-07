import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Directive,
  Input
} from "@angular/core";
import * as template from "./node.template.html";

@Directive({ selector: "mydiv" })
export class MyDiv {
  @Input() id!: string;
}

export type Binding = {
  bindingModelName: string;
  bindingTemplateName: string;
  bindingType: "value" | "arrayVertical" | "arrayHorizontal";

  binding?: Binding;
};

export interface ModelObject {
  category: string;

  position: { x: string; y: string };
  _modelId?: string;
}

export interface MyNodeModel extends ModelObject {
  test: string;
  arrayTest: { arrayText: string }[];
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("boundValue", { static: true }) inputElement: ElementRef;

  @ViewChild("templateRenderer", { static: true }) renderArea: ElementRef;

  private myDivId = 0;
  private test = "Angular";
  public model: MyNodeModel[] = [
    {
      test: "Angular 1",
      category: "test",
      position: {
        x: "0px",
        y: "0px"
      },
      arrayTest: []
    },
    {
      test: "Angular 2",
      category: "",
      position: {
        x: "100px",
        y: "0px"
      },
      arrayTest: []
    },
    {
      test: "Angular 3",
      category: "test",
      position: {
        x: "20px",
        y: "150px"
      },
      arrayTest: [
        {
          arrayText: "1"
        },
        {
          arrayText: "2"
        }
      ]
    }
  ];

  private templateMap: {
    [key: string]: {
      template: string;
      category: string;
      bindings: Binding[];
    };
  } = {};

  private isMouseDown = false;
  private mousePosition;
  private elementOffset: {
    xOffset: number;
    yOffset: number;
  } = {
    xOffset: 0,
    yOffset: 0
  };
  private selectedElement: any;
  private selectedModel: MyNodeModel;
  private selectedModelElement: HTMLElement;

  ngOnInit() {
    //document.addEventListener(
    //  "mouseup",
    //  () => {
    //    this.isMouseDown = false;
    //    this.selectedElement = undefined;
    //  },
    //  true
    //);
    //document.addEventListener("mousemove", this.mouseMove, true);
  }

  public mouseUp(e: MouseEvent) {
    event.preventDefault();

    this.isMouseDown = false;
    this.selectedElement = undefined;
    this.selectedModel = undefined;
    this.selectedModelElement = undefined;
  }

  public mouseDown(e: MouseEvent, model: MyNodeModel) {
    event.preventDefault();
    
    if (model === undefined || model === null) {
      console.log("no model");
      return;
    }

    this.isMouseDown = true;
    this.elementOffset = {
      xOffset: parseInt(model.position.x) - e.clientX,
      yOffset: parseInt(model.position.y) - e.clientY
    };
    this.selectedElement = e.target;
    this.selectedModel = model;
    this.selectedModelElement = document.querySelector(
      `#${this.selectedModel._modelId}`
    );
    console.log("MouseDown", this.selectedModelElement);
  }

  public mouseMove(event: MouseEvent) {
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
          /*this.selectedElement.offsetWidth*/
          this.selectedModelElement.offsetWidth
        )
      ) {
        //this.selectedElement.style.left = mousePosition.x + this.elementOffset.xOffset + "px";
        this.selectedModel.position.x =
          mousePosition.x + this.elementOffset.xOffset + "px";
      }

      if (
        this.checkIfWithinYBounds(
          newYPosition,
          this.selectedModelElement.offsetHeight
        )
      ) {
        //this.selectedElement.style.top = mousePosition.y + this.elementOffset.yOffset + "px";
        this.selectedModel.position.y =
          mousePosition.y + this.elementOffset.yOffset + "px";
      }

      if (this.selectedModel.position.x.startsWith("undefined")) {
        this.selectedModel.position.x = "0px";
      }
      if (this.selectedModel.position.y.startsWith("undefined")) {
        this.selectedModel.position.y = "0px";
      }

      //this.updateModel(this.selectedElement.id, "position", {
      //  x: this.selectedElement.style.left,
      //  y: this.selectedElement.style.top
      //});
    }
  }

  private updateModel(id: string, propertyName: string, value: any) {
    for (const model of this.model) {
      if (id === model._modelId) {
        model[propertyName] = value;
        return;
      }
    }
  }

  private checkIfWithinXBounds(xPosition: number, width: number) {
    //console.log('Left: ', xPosition, this.renderArea.nativeElement.offsetLeft);
    //console.log('Right: ', xPosition + width, this.renderArea.nativeElement.offsetLeft + this.renderArea.nativeElement.offsetWidth);

    if (
      xPosition >= 0 &&
      xPosition + width < this.renderArea.nativeElement.offsetWidth
    ) {
      return true;
    }

    return false;
  }

  private checkIfWithinYBounds(yPosition: number, height: number) {
    if (
      yPosition >= 0 &&
      yPosition + height < this.renderArea.nativeElement.offsetHeight
    ) {
      return true;
    }

    return false;
  }

  onInputChanged() {
    this.model[0].test = this.inputElement.nativeElement.value;
    //this.updateModelObject(this.model[0]);
  }

  ngAfterViewInit() {
    /*this.addNewTemplate("test", template.default, [
      {
        bindingModelName: "test",
        bindingTemplateName: "testbind",
        bindingType: "value"
      },
      {
        bindingModelName: "arrayTest",
        bindingTemplateName: "portbind_input",
        bindingType: "arrayHorizontal",

        binding: {
          bindingModelName: "arrayText",
          bindingTemplateName: "portbind_input_text",
          bindingType: "value"
        }
      }
    ]);*/

    //setTimeout( () => this.render());

    console.log("Renderarea:", this.renderArea);
    this.inputElement.nativeElement.value = this.model[0].test;
  }

  updateModelObject(modelObj: ModelObject) {
    const template = this.templateMap[modelObj.category];
    if (template === undefined || template === null) {
      console.log("Could not update model as template was not found");
      return;
    }

    for (const binding of template.bindings) {
      this.updateBoundElement(binding, modelObj, modelObj._modelId);
    }
  }

  render() {
    // this is faster than innerHTML = '';
    while (this.renderArea.nativeElement.firstChild) {
      this.renderArea.nativeElement.removeChild(
        this.renderArea.nativeElement.firstChild
      );
    }

    for (const modelObj of this.model) {
      const nodeTemplate = this.templateMap[modelObj.category];
      if (nodeTemplate === undefined) {
        console.log("No template, normally use default template then");
        continue;
      }

      modelObj._modelId = (this.myDivId++).toString();

      this.renderArea.nativeElement.insertAdjacentHTML(
        "beforeend",
        `<div id="model_${
          modelObj._modelId
        }" style="position: absolute; left: ${modelObj.position.x +
          this.renderArea.nativeElement.offsetLeft}px; top: ${modelObj.position
          .y + this.renderArea.nativeElement.offsetTop}px">${
          nodeTemplate.template
        }</div>`
      );

      for (const binding of nodeTemplate.bindings) {
        this.updateBoundElement(binding, modelObj, modelObj._modelId);
      }

      // Maybe put it on binding depending on what should do?
      // Like have a type where it's click event for handling new links or such things?
      const boundModelTemplate = this.renderArea.nativeElement.querySelector(
        `#model_${modelObj._modelId.toString()}`
      );

      if (boundModelTemplate === undefined || boundModelTemplate === null) {
        console.log(
          "Could not find bound model template. Won't add mouse handling"
        );
        return;
      }

      boundModelTemplate.addEventListener(
        "mousedown",
        (e: MouseEvent) => {
          this.isMouseDown = true;
          this.elementOffset = {
            xOffset: boundModelTemplate.offsetLeft - e.clientX,
            yOffset: boundModelTemplate.offsetTop - e.clientY
          };
          this.selectedElement = boundModelTemplate;
        },
        true
      );
    }
  }

  private updateBoundElement(
    binding: Binding,
    modelObj: ModelObject,
    modelId: string
  ) {
    // Gets the model template (e.g. node.template.html)-div
    // As I give every template a div around it with 'model_<id>', I can easily find it again
    const boundModelTemplate = this.renderArea.nativeElement.querySelector(
      `#model_${modelId}`
    );

    if (boundModelTemplate === undefined || boundModelTemplate === null) {
      console.log("Could not find bound model template", modelId);
      return;
    }

    // Get the html-element for the binding (in node.template.html, e.g. 'testbind')
    const boundElement = boundModelTemplate.querySelector(
      `#${binding.bindingTemplateName}`
    );

    if (boundElement === undefined || boundElement === null) {
      console.log("Could not find bound element!", binding.bindingTemplateName);
      return;
    }

    // Check what type of binding it is,
    if (binding.bindingType === "value") {
      // if it's value, just update the innertext
      boundElement.innerText = modelObj[binding.bindingModelName];
    } else if (binding.bindingType === "arrayHorizontal") {
      // if it's an horizontal array, then we need to do a bit more

      // First we add a array-div around the bound element (e.g. 'portbind_input' in node.template.html)
      boundElement.insertAdjacentHTML(
        "beforebegin",
        `<div id="array_outer_${binding.bindingTemplateName}">`
      );
      boundElement.insertAdjacentHTML("afterend", "</div>");

      // Then we get that fresh added html element
      const arrayOuter = boundModelTemplate.querySelector(
        `#array_outer_${binding.bindingTemplateName}`
      );

      // We remove its children, so the 'template' for that array (e.g. the yellow port in node.template.html)
      boundElement.parentNode.removeChild(boundElement);

      // Now we go through the model-array which is bound to this binding
      for (const arrayItem of modelObj[binding.bindingModelName]) {
        // and we add the array-template back into the array-div (e.g. the yellow port)
        // this is done this way, because the array could also be empty
        arrayOuter.insertAdjacentHTML(
          "afterbegin",
          `<div id="${binding.bindingTemplateName}_${modelObj[
            binding.bindingModelName
          ].indexOf(arrayItem)}" style="${boundElement.style.cssText}">${
            boundElement.innerHTML
          }</div>`
        ); // boundElement still holds the array-template! so we use it

        // we get the actual array-template-div, as we surround the array-template with an identifable id
        // the id is a combination of the binding-template-name and the index of the model-array
        // e.g. "portbind_input_0"
        const bindingArrayIndex = modelObj[binding.bindingModelName].indexOf(
          arrayItem
        );
        const arrayElement = arrayOuter.querySelector(
          `#${binding.bindingTemplateName}_${bindingArrayIndex}`
        );

        // make sure it'll be inline and hold its width and height
        arrayElement.style.display = "inline-block";

        // an array binding might have another binding
        if (binding.binding) {
          this.updateBoundElement(
            binding.binding,
            modelObj[binding.bindingModelName][bindingArrayIndex],
            modelId
          );
        }
      }
    }
  }

  addNewTemplate(category: string, template: string, bindings: Binding[]) {
    this.templateMap[category] = {
      category,
      template,
      bindings
    };
  }

  newElementClickEvent(e: MouseEvent) {
    console.log("Element was clicked", e.target);
  }
}
