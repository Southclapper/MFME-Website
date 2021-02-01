import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web-frontend';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
    },
    {
      title: 'Project description',
      icon: 'briefcase-outline',
    },
    {
      title: 'Teammates',
      icon: 'people-outline',
    },
    {
      title: 'Powerpoint visualization',
      icon: 'file-text-outline',
    },
  ];

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
