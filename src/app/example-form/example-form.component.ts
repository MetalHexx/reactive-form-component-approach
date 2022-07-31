import { Component, OnInit } from '@angular/core';
import { ExampleFormService } from './services/example-form.service';
import exampleFormData from './services/example-form.mock.json'
import { BaseFormGroupComponent } from '../shared/utility/form/base-formgroup-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent extends BaseFormGroupComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formService: ExampleFormService) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formService.buildForm(exampleFormData);
  }
}
