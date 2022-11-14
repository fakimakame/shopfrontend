import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopproject';

  menu = [
    {
      label: 'Station',
      link: '/app-account/station',
      icon: 'cil-briefcase',
      items: [
        {
          label: 'Add Station',
          link: '/app-account/add-station',
          icon: 'cil-pencil',
        },
        {
          label: 'View Station',
          link: '/app-account/view-station',
          icon: 'cil-pencil',
        },
      ],
    },
  ]
}
