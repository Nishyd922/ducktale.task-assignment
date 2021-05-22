import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ToDoComponent',
  templateUrl: './ToDoComponent.component.html',
  styleUrls: ['./ToDoComponent.component.css']
})
export class ToDoComponentComponent implements OnInit {
  employeeForm: FormGroup;
  getData: any;
  getFData: any;
  empDataArr = [];
  @ViewChild("myEmpForm") myEmpForm: ElementRef;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      discription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      dropdown: ['', Validators.required]
    });
  }
  ValueDetectChange(e){
    if(this.employeeForm.valid){
      this.empDataArr.push(this.employeeForm.value);
      // this.myEmpForm.nativeElement.submit();
    }
  }
  autoSubmit() {
    console.log(this.empDataArr);
    console.log(this.employeeForm.value);
    this.empDataArr.push(this.employeeForm.value);
  }


}
