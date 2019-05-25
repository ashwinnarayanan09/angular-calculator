import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-app';

  value1: number;
  value2: number;
  value3: number;
  result: number;
  operation:string;


  constructor() {
    this.value1 = 0;
    this.value2 = 0;
    this.value3 = 0;
    this.result = 0;
    this.operation = "sum";
  }

  ngOnInit(){}

  calculate(){
    if(this.operation == "sum")
      this.result = this.value1 + this.value2 + this.value3;
    else
      this.result = this.value1 * this.value2 * this.value3;
  }
}
