import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  icons = [faGithub, faLinkedinIn, faTwitter];
  constructor() {}

  ngOnInit(): void {}
}
