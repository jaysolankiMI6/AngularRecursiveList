import { Component, OnInit } from '@angular/core';
import { INavItem } from './inav-item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // expanded = {};
  expanded: { [key: number]: any } = {};
  public navItems: INavItem[] = [
    {
      displayName: 'Home',
      id:1,
      iconName: 'fa-home fa-lg p-2',
      route: 'home'
    },
    {
      displayName: 'Settings',
      iconName: 'fa-cog',
      id:2,
      children: [
        {
          displayName: 'Navigation Management',
          id:3,
          iconName: 'fa-sliders',
          children: [
            {
              displayName: 'Navigation & Form Mapping',
              id:4,
              iconName: 'fa-handshake-o',
              route: 'navigation-form-mapping'
            }
          ]
        },
        {
          displayName: 'Role Management',
          iconName: 'fa-person',
          id:5,
          route: 'stephen-fluin',
          children: [
            {
              displayName: 'Role Creation',
              iconName: 'fa-star-half-o',
              id:6,
              route: 'what-up-web'
            },
            {
              displayName: 'Role Assignments',
              iconName: 'fa-star-half-o',
              id:7,
              route: 'what-up-web'
            },
            {
              displayName: 'Role Rights',
              iconName: 'fa-star-half-o',
              id:8,
              route: 'what-up-web'
            }
          ]
        },
        {
          displayName: 'User Management',
          iconName: 'users',
          id:9,
          route: 'user-management'
        },
      ]
    },
    {
      displayName: 'Catalogue',
      iconName: 'table',
      id:10,
      route: 'catalogue'
    }
  ];

  
  constructor() { 
  }

  ngOnInit(): void {
  }
  get show(): boolean {
    return true;
  }


  onItemSelected(item: INavItem) {
    //if (!item.children || !item.children.length) {
    //  this.router.navigate([item.route]);
    //  this.navService.closeNav();
    //}
    if (item.children && item.children.length) {
      this.expanded[item.id] = !this.expanded[item.id];
    }

    console.log(this.expanded)
  }
}
