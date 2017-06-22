import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-from-model',
  templateUrl: './from-model.component.html',
  styleUrls: ['./from-model.component.css']
})
export class FromModelComponent implements OnInit {
  myForm:FormGroup
  email:string
  Price:string
  constructor(fb: FormBuilder) {
     this.myForm = fb.group({
      'email':  'dhsjksd',
      'password':  ['4', Validators.minLength(8)]
    });
   }

  ngOnInit() {
  }

   onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
