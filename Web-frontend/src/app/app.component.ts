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
      link: '/home-overview',
    },
    {
      title: 'Project description',
      icon: 'briefcase-outline',
      link: '/project-overview',
    },
    {
      title: 'Teammates',
      icon: 'people-outline',
      link: '/teams-mate-overview',
    },
    {
      title: 'Powerpoint visualization',
      icon: 'file-text-outline',
      link: '/canvas-overview',
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
