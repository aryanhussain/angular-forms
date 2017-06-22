import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
@Component({
  selector: 'app-form-explicit',
  templateUrl: './form-explicit.component.html',
  styleUrls: ['./form-explicit.component.css']
})
export class FormExplicitComponent implements OnInit {

  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'email':  ['', Validators.email],
      'password':  ['', Validators.required]
    });

    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
