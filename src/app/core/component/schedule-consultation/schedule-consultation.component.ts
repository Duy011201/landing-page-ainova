import { OnDestroy, Directive, Component } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';

@Component({
  selector: 'app-schedule-consultation',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './schedule-consultation.component.html',
  styleUrl: './schedule-consultation.component.scss'
})
export class ScheduleConsultationComponent {

  onRippleButtonClick(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    const maxDim = Math.max(buttonWidth, buttonHeight);
    const initialSize = maxDim * 2.5;

    ripple.style.width = `${initialSize}px`;
    ripple.style.height = `${initialSize}px`;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ripple.style.left = `${x - initialSize / 2}px`;
    ripple.style.top = `${y - initialSize / 2}px`;

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}
