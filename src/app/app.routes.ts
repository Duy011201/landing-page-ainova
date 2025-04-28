import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SETTING } from '@app/core/config/setting.config';
import { HomeComponent } from '@app/page/home/home.component';
import { NotFoundComponent } from '@app/core/component/not-found/not-found.component';

export const routes: Routes = [
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ROOT,
    redirectTo: SETTING.SYSTEM_PAGE.RELATED_HOME,
    pathMatch: 'full',
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_HOME,
    component: HomeComponent,
    data: { showHeader: true, showFooter: true },
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_AUTH,
    loadChildren: () => import('./page/auth/module/auth.module').then((m) => m.AuthModule),
    data: { showHeader: false, showFooter: false },
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ADMIN,
    loadChildren: () => import('./page/admin/module/admin.module').then((m) => m.AdminModule),
    data: { showHeader: false, showFooter: false },
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_NOT_FOUND,
    component: NotFoundComponent,
    data: { showHeader: true, showFooter: true },
  },
];
