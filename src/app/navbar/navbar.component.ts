import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDarkMode = false;

  toggleMenu() {
    const navbarLinks = document.querySelector(".navbar-links");
    if(navbarLinks){
      navbarLinks.classList.toggle('active');
    }
  }
  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;

    const root = document.documentElement;
    if(this.isDarkMode){
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }
}
