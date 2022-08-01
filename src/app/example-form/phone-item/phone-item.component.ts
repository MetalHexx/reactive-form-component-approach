import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormGroupComponent } from 'src/app/shared/utility/form/base-formgroup-component';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent extends BaseFormGroupComponent {
  @Input() formGroup!: FormGroup;
  @Input() enableRemove: boolean = false;
  @Input() enablePhoneType: boolean = false;
  @Output() phoneRemoved: EventEmitter<FormGroup> = new EventEmitter();

  constructor() {
    super();
  }

  onRemoveClick(){
    this.phoneRemoved.emit(this.formGroup);
  }
}
