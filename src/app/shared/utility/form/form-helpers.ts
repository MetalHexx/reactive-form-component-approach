/**
 * A utility library of common angular reactive form interactions
 * to help make form interactions a little easier and less noisy
 * in components.
 */

import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export function getChildAbstractControl(controlName: string, parentControl: AbstractControl): AbstractControl | null {
  return parentControl.get(controlName);
}

export function getChildFormControl(controlName: string, parentControl: AbstractControl): FormControl {
  return parentControl.get(controlName) as FormControl;
}

export function getChildFormGroup(groupName: string, parentControl: AbstractControl): FormGroup {
  return parentControl.get(groupName) as FormGroup;
}

export function getChildFormArray(arrayName: string, parentControl: AbstractControl): FormArray{
  return parentControl.get(arrayName) as FormArray;
}

export function controlHasError(control: AbstractControl, errorType: string): boolean {
  return control.touched && control.getError(errorType)
}

export function findChildControlAndCheckForError(controlName: string, parentControl: AbstractControl, errorType: string): boolean {
  const childControl = getChildFormControl(controlName, parentControl);
  return controlHasError(childControl, errorType);
}

export function getChildGroupArray(formArrayName: string, parentControl: AbstractControl): FormGroup[] {
  const childFormArray = getChildFormArray(formArrayName, parentControl);
  return mapToFormGroupArray(childFormArray);
}

export function mapToFormGroupArray(formArray: FormArray){
  return formArray.controls.map(group => group as FormGroup) as FormGroup[];
}

export function removeItem(item: AbstractControl, formArray: FormArray) {
  const formGroups = formArray.value as AbstractControl[];
  const indexToRemove = formGroups.indexOf(item.value);
  formArray.removeAt(indexToRemove);
}

export function setChildControlValue<T>(controlName: string, value: T, parentControl: AbstractControl ) {
  parentControl.get(controlName)?.setValue(value);
}
