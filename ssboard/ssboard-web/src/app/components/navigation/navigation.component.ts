import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @Input() isScrolled = false;
  isOpen = false;

  navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/contact', label: 'Contact' },
  ];

  toggle() { this.isOpen = !this.isOpen; }
  close() { this.isOpen = false; }
}
