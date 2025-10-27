import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlowCardComponent } from '../../components/glow-card/glow-card.component';

type Project = { id:number; title:string; category:string; description:string; image:string; featured:boolean };

const ALL: Project[] = [
  { id:1, title:'Neon Open Sign', category:'Commercial', description:'Retail storefront', image:'/assets/demo/one.jpg', featured:true },
  { id:2, title:'LED Business Display', category:'Corporate', description:'Corporate office', image:'/assets/demo/two.jpg', featured:true },
  { id:3, title:'Restaurant Illumination', category:'Hospitality', description:'Facade lighting', image:'/assets/demo/three.jpg', featured:false },
  { id:4, title:'Motivational Neon', category:'Office', description:'Workspace art', image:'/assets/demo/four.jpg', featured:true },
  { id:5, title:'LED Color Display', category:'Entertainment', description:'Dynamic install', image:'/assets/demo/five.jpg', featured:false },
  { id:6, title:'Store Front Lighting', category:'Retail', description:'Storefront glow', image:'/assets/demo/six.jpg', featured:true },
  { id:7, title:'Cyberpunk Street Sign', category:'Urban', description:'Futuristic signage', image:'/assets/demo/seven.jpg', featured:false },
  { id:8, title:'Custom Logo Display', category:'Branding', description:'Branded LED logo', image:'/assets/demo/eight.jpg', featured:true },
];

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [CommonModule, GlowCardComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  categories = ['All','Commercial','Corporate','Hospitality','Office','Entertainment','Retail','Urban','Branding'];
  selected = 'All';
  filtered: Project[] = ALL.slice();

  select(cat: string) {
    this.selected = cat;
    this.filtered = (cat === 'All') ? ALL.slice() : ALL.filter(p => p.category === cat);
  }
}
