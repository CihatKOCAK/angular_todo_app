import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ // declare all components that are part of this module
    AppComponent, TodosComponent, HeaderComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
