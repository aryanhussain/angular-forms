import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-advance-form',
  templateUrl: './advance-form.component.html',
  styleUrls: ['./advance-form.component.css']
})
export class AdvanceFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'email': 'ABC123',
      'pwd':100,
      'remember':true
    });
   }

  ngOnInit() {
  }

   onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
