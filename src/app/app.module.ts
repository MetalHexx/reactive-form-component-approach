import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { AddressGroupComponent } from './example-form/address-item/address-item.component';
import { UserItemComponent } from './example-form/user-item/user-item.component';
import { CompanyItemComponent } from './example-form/company-item/company-item.component';
import { AddressListComponent } from './example-form/address-list/address-list.component';
import { PhoneItemComponent } from './example-form/phone-item/phone-item.component';
import { PhoneListComponent } from './example-form/phone-list/phone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormComponent,
    AddressGroupComponent,
    UserItemComponent,
    CompanyItemComponent,
    AddressListComponent,
    PhoneItemComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
