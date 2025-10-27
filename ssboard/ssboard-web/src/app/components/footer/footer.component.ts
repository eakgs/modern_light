import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  // Removed missing styleUrls line
  imports: [RouterLink],
})
export class FooterComponent {
  /** Bind from template instead of using `new Date()` inline */
  readonly year = new Date().getFullYear();
}
