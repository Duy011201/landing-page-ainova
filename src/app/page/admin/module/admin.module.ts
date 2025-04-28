import {NgModule} from '@angular/core';
import {AdminRoutesModule} from './admin.routing';
import {SharedModule} from '@app/core/module/share.module';
import {BaseComponent} from '@app/core/component/base/base.component';
import {RequestApiService} from '@app/core/service/request-service';
import {AdminService} from './admin.service';

@NgModule({
  declarations: [],
  imports: [AdminRoutesModule, SharedModule, BaseComponent],
  providers: [RequestApiService, AdminService],
})
export class AdminModule {
}
