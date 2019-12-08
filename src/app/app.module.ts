import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { DataflowNodeComponent } from './dataflow-node/dataflow-node.component';
import { DefaultFunctionblockNodeComponent } from './default-functionblock-node/default-functionblock-node.component';
import { CounterFunctionblockNodeComponent } from './counter-functionblock-node/counter-functionblock-node.component';
import { DataflowNodeInputPortComponent } from './dataflow-node-input-port/dataflow-node-input-port.component';
import { DataflowNodeOuputPortComponent } from './dataflow-node-ouput-port/dataflow-node-ouput-port.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    DataflowNodeComponent,
    DefaultFunctionblockNodeComponent,
    CounterFunctionblockNodeComponent,
    DataflowNodeInputPortComponent,
    DataflowNodeOuputPortComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
