import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { RouterLink } from '@angular/router';
import { FlatformComponent } from '@app/core/component/flatform/flatform.component';
import { TestimonialComponent } from '@app/core/component/testimonial/testimonial.component';

@Component({
  selector: 'app-solution',
  imports: [SharedModule, FlatformComponent, TestimonialComponent],
  templateUrl: './solution.html',
  styleUrl: './solution.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SolutionComponent {

}
