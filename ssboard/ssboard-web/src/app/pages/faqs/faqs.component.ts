import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
})
export class FaqsComponent {
  // track which FAQ is open
  openIndex: number | null = 0;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  faqs = [
    {
      q: 'What materials do you use for the light boards?',
      a: 'We use premium-grade acrylic, aluminum, and energy-efficient LED modules with smart control systems to ensure durability and vibrant illumination.',
    },
    {
      q: 'Can I customize the design and colors?',
      a: 'Absolutely! Every SSBoard light board is custom-built. You can choose your shape, color palette, lighting effects, and even animation patterns.',
    },
    {
      q: 'Do you provide installation services?',
      a: 'Yes — we handle the full process: design, fabrication, delivery, and professional installation with on-site calibration for perfect results.',
    },
    {
      q: 'How long does it take to complete a project?',
      a: 'Most custom projects take 2–4 weeks depending on complexity, size, and material availability.',
    },
    {
      q: 'Do you offer maintenance or repair support?',
      a: 'Yes, we provide post-installation maintenance and repair packages to ensure your display stays stunning for years.',
    },
  ];
}
