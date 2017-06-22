import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  price: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required],
      'price':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    this.price = this.myForm.controls['price'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.price.valueChanges.subscribe(
      (price:string) =>{
      console.log('price changed to:', price);
    });

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );

  }

  ngOnInit() {
  }
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
