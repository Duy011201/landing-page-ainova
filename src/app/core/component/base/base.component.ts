import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from './../../service/loading.service';
import { OnDestroy, Directive, Component } from '@angular/core';
import { SETTING } from '@app/core/config/setting.config';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SharedModule } from '@app/core/module/share.module';
import { LoadingComponent } from '../loading/loading.component';
import { Router } from '@angular/router';
import { TYPE_CONFIG } from '@app/core/config/type.config';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [SharedModule, LoadingComponent],
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnDestroy {
  protected subscriptions: Subscription[] = [];
  protected form: FormGroup;
  protected TOAST_MESSAGE = TYPE_CONFIG.TOAST_MESSAGE;

  constructor(
    protected _messageService: MessageService,
    protected _loadingService: LoadingService,
    protected _fb: FormBuilder,
    protected _router: Router,
  ) {
    this.form = this._fb.group({});
  }

  /**
   * Add Subscription to manage cleanup in ngOnDestroy
   * @param sub Subscription instance
   * @description This method is used to add a subscription to the list of subscriptions.
   * It is useful for managing multiple subscriptions in a component and ensuring they are cleaned up properly.
   * It helps prevent memory leaks by unsubscribing from all subscriptions when the component is destroyed.
   */
  addSubscription(sub: Subscription) {
    this.subscriptions.push(sub);
  }

  showLoading() {
    this._loadingService.show();
  }

  hideLoading() {
    this._loadingService.hide();
  }

  /**
   * Handle toastMessage globally
   * @param type Type of toastMessage (error, success, warning)
   * @param title Title of the toastMessage
   * @param message Message to display in the toastMessage
   * @description This method is used to handle toastMessage that occur during API calls or other operations.
   * It hides the loading spinner and displays an error message to the user.
   * It can be used to log toastMessage, show notifications, or redirect users to an error page.
   */
  toastMessage(
    type: (typeof TYPE_CONFIG.TOAST_MESSAGE)[keyof typeof TYPE_CONFIG.TOAST_MESSAGE],
    title: any,
    message: any,
  ) {
    this.hideLoading();
    this._messageService.add({
      severity: type,
      summary: title,
      detail: message || SETTING.MSG.ERROR,
    });
  }

  /**
   * Debug logging utility
   * @param args Data to logData
   * @description This method is used for debugging purposes. It logs data to the console with a specific format.
   * It can be used to log API responses, errors, or any other data that needs to be inspected during development.
   */
  logData(...args: any[]) {
    console.log('-------------------');
    console.log('🛠️ Debug:', ...args);
    console.log('-------------------');
  }

  /**
   * Navigate to a specific page
   * @param url URL to navigate to
   * @description This method uses Angular's Router to navigate to a specific URL.
   * It can be used to redirect users after certain actions, like form submission or error handling.
   */
  goToPage(url: string): void {
    this._router.navigate(['/' + url]);
  }

  /**
   * Check if the form is valid
   * @returns boolean indicating if the form is valid
   * @description This method checks if the form is valid and if any of its controls are dirty or touched.
   * It also checks if the form is a FormArray and has at least one value.
   * If the form is invalid, it marks all fields as touched.
   */
  markAllControlsAsTouched(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markAllControlsAsTouched(control);
      } else {
        control?.markAsTouched();
        control?.markAsDirty();
      }
    });
  }

  /**
   * Check if a specific control is invalid
   * @param controlName Name of the control to check
   * @return boolean indicating if the control is invalid
   * @description This method checks if the control is invalid and has been touched or dirty.
   * It also checks if the control is a FormArray and has at least one value.
   */
  isControlInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    if (!control) return false;

    if (Array.isArray(control.value) && control.value.length > 0) {
      return control.dirty || control.touched;
    }

    return control.invalid && (control.dirty || control.touched);
  }

  /**
   * Reset the form's status to its initial state.
   * @description This method resets the form status by marking it as pristine (no changes) and untouched (no focus interaction).
   * It also updates the form's value and validity to reflect the reset state without altering its actual data.
   * Useful after form submission or when you want to clear the form's error and touched states.
   */
  resetStatusForm(form: FormGroup | FormArray) {
    form.markAsPristine(); // reset status dirty
    form.markAsUntouched(); // reset status touched
    form.updateValueAndValidity(); // re-validate lại form
  }

  /**
   * Get error message for a specific control
   * @param controlName Name of the control to get the error message for
   * @return Error message string
   * @description This method checks the control's errors and returns a corresponding error message.
   */
  getErrorMessage(controlName: any): string {
    const control = this.form.get(controlName);

    if (!control || !control.invalid || !control.touched) return '';

    if (control instanceof FormArray) {
      if (control.invalid && control.touched) {
        for (let i = 0; i < control.controls.length; i++) {
          const childControl = control.at(i);
          if (childControl.invalid) {
            if (childControl.hasError('required')) return SETTING.MSG.FORM_REQUIRED;
          }
        }
        return SETTING.MSG.FORM_SELECT;
      }
    } else {
      if (control.hasError('required')) return SETTING.MSG.FORM_REQUIRED;
      if (control.hasError('min')) return `${SETTING.MSG.FORM_MIN} ${control.errors?.['min'].min}`;
      if (control.hasError('max')) return `${SETTING.MSG.FORM_MAX} ${control.errors?.['max'].max}`;
      if (control.hasError('pattern')) return SETTING.MSG.FORM_PATTERN;
      if (control.hasError('minlength')) {
        const len = control.errors?.['minlength'].requiredLength;
        return SETTING.MSG.FORM_MINLENGTH.replace('{0}', len);
      }
      if (control.hasError('maxlength')) {
        const len = control.errors?.['maxlength'].requiredLength;
        return SETTING.MSG.FORM_MAXLENGTH.replace('{0}', len);
      }
      if (control.hasError('email')) return SETTING.MSG.FORM_EMAIL;
    }

    return '';
  }

  /**
   * Cleanup subscriptions when component is destroyed
   * @description This method is called when the component is destroyed.
   * It unsubscribes from all subscriptions to prevent memory leaks.
   * It is important to clean up subscriptions to avoid memory leaks in Angular applications.
   * This is especially important for long-lived components or services that may have multiple subscriptions.
   * It ensures that all resources are released when the component is no longer needed.
   * This method is automatically called by Angular when the component is destroyed.
   * It is a good practice to implement this method in all components that have subscriptions.
   * It helps keep the application performant and responsive by releasing resources that are no longer needed.
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  protected readonly SETTING = SETTING;
}
