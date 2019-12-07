import { Component, OnInit } from '@angular/core';
import { ErsterComponent } from '../erster.component.ts';

@Component({
  selector: 'app-zweiter',
  templateUrl: './zweiter.component.html',
  styleUrls: ['./zweiter.component.css']
})
export class ZweiterComponent  extends ErsterComponent implements OnInit {

  constructor() { 
    super();

    
  }

  ngOnInit() {
    console.log('zweiter: ', super.model)
  }

}