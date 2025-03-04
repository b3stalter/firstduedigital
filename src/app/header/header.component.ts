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
    { name: 'Home', path: '/', active: true },
    { name: 'Fusion', path: '/fusion', active: false },
    { name: 'About', path: '/about', active: false },
    { name: 'Services', path: '/services', active: false },
    { name: 'Gallery', path: '/gallery', active: false },
    { name: 'Contact', path: '/contact', active: false },
  ];

  constructor() {
  }

}
