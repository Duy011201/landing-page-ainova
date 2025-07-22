import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solution',
  imports: [SharedModule],
  templateUrl: './solution.html',
  styleUrl: './solution.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SolutionComponent {

}
