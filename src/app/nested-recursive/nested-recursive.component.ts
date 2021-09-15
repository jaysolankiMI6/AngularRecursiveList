import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-recursive',
  templateUrl: './nested-recursive.component.html',
  styleUrls: ['./nested-recursive.component.scss']
})
export class NestedRecursiveComponent implements OnInit {
  key2: string = "items";
  data2 = [
    {
      "label": "File",
      "icon": "pi pi-fw pi-file",
      "items": [
        {
          "label": "New",
          "icon": "pi pi-fw pi-plus",
          "items": [
            {
              "label": "Bookmark",
              "icon": "pi pi-fw pi-bookmark",
              "items": [
                {
                  "label": "Bookmark",
                  "icon": "pi pi-fw pi-bookmark",
                  "items": [
                    {
                      "label": "Bookmark",
                      "icon": "pi pi-fw pi-bookmark",
                    },
                    {
                      "label": "Video",
                      "icon": "pi pi-fw pi-video"
                    }
                  ]
                },
                {
                  "label": "Video",
                  "icon": "pi pi-fw pi-video"
                }
              ]
            },
            {
              "label": "Video",
              "icon": "pi pi-fw pi-video"
            }
          ]
        },
        {
          "label": "Delete",
          "icon": "pi pi-fw pi-trash",
          "command": (event: any) => {
            console.log("Delete Clicked", event);
          }

        },
        {
          "separator": true
        },
        {
          "label": "Export",
          "icon": "pi pi-fw pi-external-link",
          "command": (event: any) => {
            console.log("Export Clicked", event);
          }
        }
      ]
    },
    {
      "label": "Edit",
      "icon": "pi pi-fw pi-pencil",
      "items": [
        {
          "label": "Left",
          "icon": "pi pi-fw pi-align-left"
        },
        {
          "label": "Right",
          "icon": "pi pi-fw pi-align-right"
        },
        {
          "label": "Center",
          "icon": "pi pi-fw pi-align-center"
        },
        {
          "label": "Justify",
          "icon": "pi pi-fw pi-align-justify"
        }
      ]
    },
    {
      "label": "Users",
      "icon": "pi pi-fw pi-user",
      "items": [
        {
          "label": "New",
          "icon": "pi pi-fw pi-user-plus"
        },
        {
          "label": "Delete",
          "icon": "pi pi-fw pi-user-minus"
        },
        {
          "label": "Search",
          "icon": "pi pi-fw pi-users",
          "items": [
            {
              "label": "Filter",
              "icon": "pi pi-fw pi-filter",
              "items": [
                {
                  "label": "Print",
                  "icon": "pi pi-fw pi-print"
                }
              ]
            },
            {
              "icon": "pi pi-fw pi-bars",
              "label": "List"
            }
          ]
        }
      ]
    },
    {
      "label": "Events",
      "icon": "pi pi-fw pi-calendar",
      "items": [
        {
          "label": "Edit",
          "icon": "pi pi-fw pi-pencil",
          "items": [
            {
              "label": "Save",
              "icon": "pi pi-fw pi-calendar-plus"
            },
            {
              "label": "Delete",
              "icon": "pi pi-fw pi-calendar-minus"
            }
          ]
        },
        {
          "label": "Archieve",
          "icon": "pi pi-fw pi-calendar-times",
          "items": [
            {
              "label": "Remove",
              "icon": "pi pi-fw pi-calendar-minus"
            }
          ]
        }
      ]
    },
    {
      "separator": true
    },
    {
      "label": "Quit",
      "icon": "pi pi-fw pi-power-off",
      "command": (event: any) => {
        console.log("Quit Clicked", event);
      }
    }
  ]

  key: string = "children";
  data = [
    {
      name: 'Laptop',
      children: [
        {
          name: 'Apple',
          children: [{ name: 'Macbook Air', children: [{ name: 'M1' }, { name: 'I7' }] }, { name: 'Macbook Pro' }]
        },
        {
          name: 'Microsoft',
          children: [{ name: 'Surface Pro' }]
        }
      ]
    },
    {
      name: 'Desktop',
      children: [{ name: 'Dell' }]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
