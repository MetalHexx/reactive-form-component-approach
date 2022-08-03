import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray } from '@angular/forms';
import { buildPhoneGroup } from '../services/example-form-initializers';
import { PhoneType } from '../services/example-form.models';

import { PhoneListComponent } from './phone-list.component';

describe('PhoneListComponent', () => {
  let component: PhoneListComponent;
  let fixture: ComponentFixture<PhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponent);
    component = fixture.componentInstance;

    const formArray = new FormArray([]);
    component.formArray = formArray;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display add button when enableAdd is true', () => {
    component.enableAdd = true;

    fixture.detectChanges();
    const addButton = fixture.nativeElement.querySelector('#addPhoneButton');

    expect(addButton).toBeTruthy();
  });

  it('should hide add button when enableAdd is false', () => {
    component.enableAdd = false;

    fixture.detectChanges();
    const addButton = fixture.nativeElement.querySelector('#addPhoneButton');

    expect(addButton).toBeFalsy();
  });

  it('should not render phone items when formarray is empty', () => {
    const formArray = new FormArray([]);
    component.formArray = formArray;

    fixture.detectChanges();
    const phoneItemComponent = fixture.nativeElement.querySelector('app-phone-item');

    expect(phoneItemComponent).toBeFalsy();
  });

  it('should render phone item components when inputted form array has items', () => {
    const formArray = new FormArray([
      buildPhoneGroup({
        number: '',
        type: PhoneType.Home
      })
    ]);
    component.formArray = formArray;

    fixture.detectChanges();

    const phoneItemComponent = fixture.nativeElement.querySelector('app-phone-item');

    expect(phoneItemComponent).toBeTruthy();
  });

  it('formarray length should increase by 1 when add button is clicked', () => {
    //arrange
    component.enableAdd = true;

    //act
    fixture.detectChanges();
    const addButton = fixture.nativeElement.querySelector('#addPhoneButton');
    addButton.click();

    //assert
    expect(component.formArray.value.length).toBe(1);
  });

  it('phone items count should decrease by 1 when remove phoneRemoved() is called', () => {
    //arrange
    const phoneToDelete = buildPhoneGroup({
      number: '',
      type: PhoneType.Home
    });

    const formArray = new FormArray([
      phoneToDelete
    ]);
    component.formArray = formArray;
    component.enableAdd = true;

    //act
    fixture.detectChanges();
    expect(component.formArray.value.length).toBe(1)
    component.removeItem(phoneToDelete);
    const phoneItemComponent = fixture.nativeElement.querySelector('app-phone-item');

    //assert
    expect(component.formArray.value.length).toBe(0);
    expect(component.formArray.value.length).toBeFalsy(phoneItemComponent);
  });
});
