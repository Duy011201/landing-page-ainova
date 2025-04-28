import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingService } from '@app/core/service/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$;
  }
}
