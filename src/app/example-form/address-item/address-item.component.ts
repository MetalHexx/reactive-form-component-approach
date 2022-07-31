import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormGroupComponent } from 'src/app/shared/utility/form/base-formgroup-component';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressGroupComponent extends BaseFormGroupComponent  {
  @Input() formGroup!: FormGroup;
  @Input() removeable: boolean = false;
  @Output() addressRemoved: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {
    super();
  }

  onRemoveClick(){
    this.addressRemoved.emit(this.formGroup);
  }
}
