import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isShownSimpleContextMenu = false;
  simpleContextMenuPosX = 0; // Add this
  simpleContextMenuPosY = 0; // Add this
  constructor() {}
  ngOnInit() {}

  displayContextMenu(event: PointerEvent) {
    event.preventDefault();
    this.showSimpleContextMenu();
    this.simpleContextMenuPosX = event.clientX;
    this.simpleContextMenuPosY = event.clientY + window.scrollY;
  }

  showSimpleContextMenu() {
    this.isShownSimpleContextMenu = true;
  }
  hideSimpleContextMenu() {
    this.isShownSimpleContextMenu = false;
  }

  onContextMenuAction(actionName: string) {
    this.hideSimpleContextMenu();
    alert('User requested:' + actionName);
  }
}
