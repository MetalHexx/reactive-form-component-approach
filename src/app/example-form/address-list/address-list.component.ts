import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { BaseFormArrayComponent } from "src/app/shared/utility/form/base-formarray-component";
import { buildAddressGroup } from '../services/example-form-initializers';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent extends BaseFormArrayComponent {
  @Input() formArray!: FormArray;
  @Input() enableAdd: boolean = false;

  constructor() {
    super();
  }

  onAddClick(){
    this.addItem(buildAddressGroup({
      street: '',
      zip: ''
    }));
  }
}
