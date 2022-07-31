import { AbstractControl, FormArray } from "@angular/forms";
import { mapToFormGroupArray, removeItem } from "./form-helpers";

/**
 * Provides basic utility to a component that is hosting
 * a FormArray to reduce noisy, redundant implementation details
 */
export abstract class BaseFormArrayComponent {
  abstract formArray: FormArray;

  getFormGroupArray() {
    return mapToFormGroupArray(this.formArray);
  }

  removeItem(item: AbstractControl){
    removeItem(item, this.formArray);
  }

  addItem(item: AbstractControl){
    this.formArray.push(item);
  }
}
