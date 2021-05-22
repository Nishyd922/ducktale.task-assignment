import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss']
})
export class CreateToDoComponentComponent implements OnInit {
  ductTl:FormGroup;
  @ViewChild('testForm') testFormElement;
  arrList:any = [];
  repeating = 'task';
  constructor() { }

  ngOnInit(): void {
    this.ductTl = new FormGroup(   {
      tName:new FormControl('',[Validators.required]),
      desc:new FormControl('',[Validators.required]),

    }
      );
  }

  detectValueChange(){
    console.log("value change");
    if(this.ductTl.valid){
      console.log("submit form");
      this.testFormElement.nativeElement.submit();
      this.ductTl.value.checkMark = false;
      this.arrList.push(this.ductTl.value);
      console.log(this.arrList);
    }
  }

}
