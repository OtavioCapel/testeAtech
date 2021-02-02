import { AbstractControl } from "@angular/forms";


export function usernameValidator(control: AbstractControl) {
    const { value } = control;

    if(value.split(' ').length > 1) {
        return { whitespace: true }
    }

    return null
}