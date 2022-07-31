import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { findChildControlAndCheckForError, getChildFormArray, getChildFormControl, getChildFormGroup, getChildGroupArray, setChildControlValue } from "./form-helpers";

/**
 * Provides basic utility to a component that is hosting
 * a FormGroup to reduce noisy, redundant implementation details
 */
export abstract class BaseFormGroupComponent {
  abstract formGroup: FormGroup

  getChildFormArray(formArrayName: string): FormArray {
    return getChildFormArray(formArrayName, this.formGroup);
  }

  getChildGroupArray(formArrayName: string): FormGroup[] {
    return getChildGroupArray(formArrayName, this.formGroup);
  }

  controlHasError(controlName: string, errorType: string): boolean {
    return findChildControlAndCheckForError(controlName, this.formGroup, errorType);
  }

  getChildFormGroup(controlName: string): FormGroup {
    return getChildFormGroup(controlName, this.formGroup);
  }

  getChildFormControl(controlName: string): FormControl {
    return getChildFormControl(controlName, this.formGroup);
  }

  setChildControlValue<T>(controlName: string, value: T, ) {
    setChildControlValue(controlName, value, this.formGroup);
  }
}
