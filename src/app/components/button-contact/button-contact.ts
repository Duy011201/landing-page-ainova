import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-button-contact',
  imports: [
    NgIf,
  ],
  templateUrl: './button-contact.html',
  styleUrl: './button-contact.scss'
})
export class ButtonContactComponent {
  isShowContact: boolean = false;

  onChangeShowContact () {
    this.isShowContact = !this.isShowContact;
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
