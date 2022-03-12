import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  isVisible = false;
  arrow = '>';

  ngOnInit(): void {}

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
    this.arrow = this.isVisible ? '<' : '>';
  }
}
