import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-context-menu',
  templateUrl: './simple-context-menu.component.html',
  styleUrls: ['./simple-context-menu.component.css']
})
export class SimpleContextMenuComponent implements OnInit {
  @Input() posX; // Add this
  @Input() posY; // Add this
  @Output() actionCall = new EventEmitter(); // Add this
  constructor() { }

  ngOnInit() {
  }

  onActionCall(actionName: string) { // Add this
    this.actionCall.emit(actionName);
  }

}
