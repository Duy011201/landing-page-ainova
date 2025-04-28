// share.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from '@app/core/service/loading.service';
import { PrimeNGModule } from '@app/core/module/prime.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    PrimeNGModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ConfirmationService, MessageService, LoadingService],
})
export class SharedModule {
  constructor() {}
}
