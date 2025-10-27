import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// If you already import GlowCardComponent, keep it. It's fine if Angular warns when
// the template doesn't use it in some variants.
import { GlowCardComponent } from '../../components/glow-card/glow-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, GlowCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /** which feature card is “selected” (0 = none, 1..3 = cards) */
  selectedCard = 0;

  /** mark a card as selected (used by (click) / (mouseenter) in the template) */
  selectCard(index: number): void {
    this.selectedCard = index;
  }
}
