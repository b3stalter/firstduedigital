import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  links = [
    { name: 'Home', path: '/app-home', active: true },
    { name: 'Fusion', path: '/app-fusion', active: true },
    { name: 'About', path: '/app-about', active: false },
    { name: 'Services', path: '/app-services', active: false },
    { name: 'Gallery', path: '/app-gallery', active: false },
    { name: 'Contact', path: '/app-contact', active: false },
  ];

  constructor() {
  }

}
