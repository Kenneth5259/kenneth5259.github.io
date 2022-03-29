import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  linkedIn = faLinkedinIn as IconProp;
  github = faGithub as IconProp;
  isVisible = false;
  arrow = '>';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
    this.arrow = this.isVisible ? '<' : '>';
  }

  // Take link and navigate
  navigateTo(uri: string) {
    this.router.navigate([uri]);
  }
}
