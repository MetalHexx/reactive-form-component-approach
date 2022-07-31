import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { BaseFormArrayComponent } from 'src/app/shared/utility/form/base-formarray-component';
import { buildPhoneGroup } from '../services/example-form-initializers';
import { PhoneType } from '../services/example-form.models';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent extends BaseFormArrayComponent {
  @Input() formArray!: FormArray;
  @Input() enableAdd: boolean = false;

  constructor() {
    super();
  }

  onAddClick(){
    this.addItem(buildPhoneGroup({
      number: '',
      type: PhoneType.Home
    }));
  }
}
