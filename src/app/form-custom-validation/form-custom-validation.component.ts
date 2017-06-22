import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}


@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css']
})
export class FormCustomValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator,Validators.minLength(5)])]
    });

    this.sku = this.myForm.controls['sku'];

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
        console.log(this.myForm.valid)
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
  
  
  ngOnInit() {
    console.log(this.myForm.valid)
  }

}
