import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimpleToolbarComponent} from './components/toolbar/simple-toolbar/simple-toolbar.component';
import { SimpleContextMenuComponent } from './components/context-menus/simple-context-menu/simple-context-menu.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleToolbarComponent,
    SimpleContextMenuComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
