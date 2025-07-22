import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SharedModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isMobile: boolean = false;
  sidebarVisible = false;

  menuItems = [
    { label: 'Về chúng tôi', icon: 'fa-solid fa-house', routerLink: '/home' },
    { label: 'Sản phẩm', icon: 'fa-solid fa-gear', routerLink: '/home' },
    { label: 'Giải pháp', icon: 'fa-solid fa-house', routerLink: '/solution' },
    { label: 'Bảng giá', icon: 'fa-solid fa-table', routerLink: '/home' },
    { label: 'Liên hệ', icon: 'fa-solid fa-paper-plane', routerLink: '/contact' }
  ];

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize);
  }

  checkScreenSize = (): void => {
    this.isMobile = window.innerWidth <= 768;
  }

  get fullMenu() {
    return this.menuItems;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
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
