import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {
  employeeForm: FormGroup;
  empDoneArr= [];
  @Input()  empData = [];
  constructor() { }

  ngOnInit(): void {
    // this.employeeForm = new FormGroup({
    //   name: new FormControl(),
    //   discription: new FormControl(),
    //   dropdown: new FormControl(),
    // })
  }
  dataDone(itm:any, i:number) {
    this.empDoneArr.push(itm);
    const itemInd = this.empData.indexOf(itm);
    console.log(this.empData.indexOf(itm));
    console.log("string"+i);
    this.empData.splice(itemInd,1);
    console.log(this.empDoneArr);
  }
  removeObj(evt){
    console.log(evt);
    this.empData.push(evt);
    this.empDoneArr.indexOf(evt);
    console.log(this.empDoneArr.indexOf(evt));
    this.empDoneArr.splice(this.empDoneArr.indexOf(evt),1);
  }

}
