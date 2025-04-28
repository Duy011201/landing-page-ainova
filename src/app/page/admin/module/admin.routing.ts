import { RouterModule, Routes } from '@angular/router';
import { SETTING } from '@app/core/config/setting.config';
import { NotFoundComponent } from '@app/core/component/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ROOT,
    component: NotFoundComponent,
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_NOT_FOUND,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutesModule {}
