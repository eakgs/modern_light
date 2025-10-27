import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-glow-card',
  imports: [CommonModule, RouterLink, GlowCardComponent],
  template: `
    <div class="glow-card"
         [ngClass]="{ 'hover:scale-105': hover }"
         [class]="extraClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class GlowCardComponent {
  @Input() hover = true;
  @Input() extraClass = '';
}
