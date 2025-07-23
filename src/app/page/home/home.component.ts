import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  genText = [
    { text: 'Quản trị trải nghiệm', color: '#fca717' },
    { text: 'Phân tích phản hồi', color: '#de282e' },
    { text: 'Chăm sóc khách hàng', color: '#ffce32' },
    { text: 'Thu thập phản hồi', color: '#0058B0' }
  ];

  currentIndex = 0;
  animate = false;
  private intervalId: any;

  ngOnInit(): void {
    this.animate = true;
    this.intervalId = setInterval(() => {
      this.animate = false;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.genText.length;
        this.animate = true;
      }, 200);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

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
