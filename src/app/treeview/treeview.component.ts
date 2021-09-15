import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { MatMenuTrigger } from '@angular/material';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {
  //items = [];
  // @Input('data') items: any = [];
  @Input('data2') items: any = [];
  // @Input('key') key: string = "";
  @Input('key2') key: string = "";

  // @ViewChild(MatMenuTrigger)
  // contextMenu: MatMenuTrigger;

  constructor() { 
  } 
  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    // this.contextMenu.menuData = { 'item': item };
    // this.contextMenu.menu.focusFirstItem('mouse');
    // this.contextMenu.openMenu();
  }
  ngOnInit(): void {
    console.log('this.items', this.items);
  }

  hideShowElement(item: any){
    item.show = !item.show; 
  }
}


export interface Item {
  label: string;
  icon: string;
  items: any
}
