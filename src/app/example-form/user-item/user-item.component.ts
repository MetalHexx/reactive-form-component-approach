import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormGroupComponent } from 'src/app/shared/utility/form/base-formgroup-component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent extends BaseFormGroupComponent {
  @Input() formGroup!: FormGroup;

  constructor() {
    super();
  }
}
