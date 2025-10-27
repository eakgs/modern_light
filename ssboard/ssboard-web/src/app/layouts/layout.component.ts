import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  template: `
<div class="app-shell">
  <app-navigation [isScrolled]="isScrolled"></app-navigation>
  <main class="relative">
    <ng-content></ng-content>
  </main>
  <app-footer></app-footer>
</div>

  `,
})
export class LayoutComponent {
  isScrolled = false;
  @HostListener('window:scroll') onScroll() { this.isScrolled = window.scrollY > 50; }
}
