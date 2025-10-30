import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.css'] // or .scss if you use that
})
export class AboutComponent {

  // 🟢 Your milestones data goes here
  milestones = [
    { year: '2019', title: 'SSBoard founded', desc: 'Built our first custom LED boards for local shops.' },
    { year: '2021', title: 'Smart control animations', desc: 'Introduced programmable effects & remote control.' },
    { year: '2024+', title: 'Scaling experiences', desc: 'Bigger installs, faster fabrication, greener power usage.' },
    // You can keep adding more entries if needed
  ];

  // (optional) — you can add logic here later for animations or scroll triggers
}
