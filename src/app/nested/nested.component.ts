import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {
  name: any;
  username: any;
  users: any = [];
  inneritem: any = [];
  inneritem2: any = [];
  inneritem3: any = [];

  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  key: any;
  key2: any;
  key3: any;

  title: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.name) {
        this.username = params.name;
      }
    });

    this.users = [
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
                "icon": "pi pi-fw pi-bookmark"
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
  }
  ngOnInit(): void {
    // this.username = this.route.snapshot.paramMap.get('username');
    // console.log("username ", this.username);
    // this.route.paramMap.subscribe(params => {
    //   console.log("params ",params.username);
    // });
  }
  openNested(data : any){
    this.title = data.label;
    this.show = true;
    this.show2 = false;
    this.key = data.label;
    console.log("data ",data);
    this.inneritem = data.items;
  }

  openNested2(data : any){
    this.title = data.label;
    this.show2 = true;
    this.show3 = false;
    this.key2 = data.label;
    console.log("data2 ",data);
    this.inneritem2 = data.items;
  }

  openNested3(data : any){
    this.title = data.label;
    this.show3 = true;
    this.key3 = data.label;
    console.log("data3 ",data);
    this.inneritem3 = data.items;
  }



  expand(p: any){
    console.log("p ",p);
    // if(this.key == undefined || this.key == null){
        this.key = p.label;
        // this.users.forEach((element: any) => {
        //     if(this.key && this.key == element.label){
        //       this.key2 = p.label;
        //     }
        // });
    // }
    // if(this.key == undefined || this.key == null){
    //   this.key = p.label;
    // } else if(this.key !== undefined && this.key !== null) {
    //   this.key2 = p.label;
    //   console.log("key 2 ",this.key2);
    // } else if(this.key2 !== undefined && this.key2 !== null) { 
    //   this.key3 = p.label;
    // } else {
    //   console.log("key ",this.key);
    //   console.log("p label ",p.label);
    //   this.key = p.label;
    // }
    console.log("key ",this.key);
    // p.expanded = !p.expanded;
  }

  /*

  parentId, id , name , icon
  p01, 0, File, 'file',
  p01, 1, edit, edit
  p02, 0, view, view
  */

  /*
  {
    p01: {
      name: '',
      icon: '',
      menu: [
        
      ]
    },
    p02: {

    }
  }
*/
}
