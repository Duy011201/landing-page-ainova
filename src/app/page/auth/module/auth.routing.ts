import { RouterModule, Routes } from '@angular/router';
import { SETTING } from '@app/core/config/setting.config';
import { NotFoundComponent } from '@app/core/component/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

export const routes: Routes = [
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ROOT,
    component: LoginComponent,
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_LOGIN,
    component: LoginComponent,
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_REGISTER,
    component: RegisterComponent,
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ROOT,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutesModule {}
