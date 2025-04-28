import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '@app/core/component/base/base.component';
import { LoadingService } from '@app/core/service/loading.service';
import { MessageService } from 'primeng/api';
import { SETTING } from '@app/core/config/setting.config';
import { AuthService } from '../module/auth.service';

@Component({
  selector: 'fe-app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(
    protected override _messageService: MessageService,
    protected override _loadingService: LoadingService,
    protected override _fb: FormBuilder,
    protected override _router: Router,
    private _authService: AuthService
  ) {
    super(_messageService, _loadingService, _fb, _router);
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.form.invalid) {
      this.toastMessage(this.TOAST_MESSAGE.ERROR, SETTING.MSG.ERROR, SETTING.MSG.FORM_INVALID);
      this.markAllControlsAsTouched(this.form);
      return;
    }
    this.showLoading();
    this._authService.apiAuthLogin(this.form.value).subscribe({
      next: (res) => {
        this.hideLoading();
        this.toastMessage(this.TOAST_MESSAGE.SUCCESS, SETTING.MSG.SUCCESS, res?.message);
        this._router.navigate(['/']);
      },
      error: (err) => {
        this.hideLoading();
        this.toastMessage(this.TOAST_MESSAGE.ERROR, SETTING.MSG.SUCCESS, err?.message);
        this.resetStatusForm(this.form);
      }
    });
  }
}
