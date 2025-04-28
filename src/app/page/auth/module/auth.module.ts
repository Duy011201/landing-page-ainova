import { NgModule } from '@angular/core';
import { AuthRoutesModule } from './auth.routing';
import { SharedModule } from '@app/core/module/share.module';
import { LoginComponent } from '../login/login.component';
import { BaseComponent } from '@app/core/component/base/base.component';
import { RequestApiService } from '@app/core/service/request-service';
import { AuthService } from './auth.service';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutesModule, SharedModule, BaseComponent],
  providers: [RequestApiService, AuthService],
})
export class AuthModule {}
