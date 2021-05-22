import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css']
})
export class DoneListComponentComponent implements OnInit {
  @Input() doneList = [];
  @Output() removedItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  unSelect(itm, i) {
    console.log("unselect"+itm);
    this.removedItem.emit(itm);
  }
}
