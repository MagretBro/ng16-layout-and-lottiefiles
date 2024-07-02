import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSmallScreen: boolean;
  isMobileMenuOpen = false;


  toggleMobileMenu() {
    // console.log("Menu toggled");
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor() {
    this.isSmallScreen = window.innerWidth <= 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 1024;
  }
}
