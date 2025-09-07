import { OnDestroy, Directive, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';

@Component({
  selector: 'app-flatform',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './flatform.component.html',
  styleUrl: './flatform.component.scss',
})
export class FlatformComponent {

}
