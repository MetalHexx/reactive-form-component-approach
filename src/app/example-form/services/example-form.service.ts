import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { buildAddressGroup, buildPhoneGroup } from './example-form-initializers';
import { Address, Example, User } from './example-form.models';

@Injectable({
  providedIn: 'root'
})
export class ExampleFormService {

  constructor(private formBuilder: FormBuilder) { }

  buildForm(exampleData: Example): FormGroup {
    return this.formBuilder.group({
      user: this.formBuilder.group({
        firstName: [exampleData.user.firstName, Validators.required],
        lastName: [exampleData.user.lastName, Validators.required],

        addresses: this.formBuilder.array(
          exampleData.user.addresses.map(address => buildAddressGroup(address))),

        phoneNumbers: this.formBuilder.array(
          exampleData.user.phoneNumbers.map(phone => buildPhoneGroup(phone)))
      }),
      company: this.formBuilder.group({
        name: [exampleData.company.name, Validators.required],
        address: buildAddressGroup(exampleData.company.address),
      })
    });
  }

  extractFormData(): Example {
    throw new Error("Not implemented yet");
  }
}
