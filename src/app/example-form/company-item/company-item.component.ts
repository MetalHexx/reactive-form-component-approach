import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormGroupComponent } from 'src/app/shared/utility/form/base-formgroup-component';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent extends BaseFormGroupComponent {

  @Input() formGroup!: FormGroup;

  constructor() {
    super();
  }
}
