import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent } from './nested/nested.component';
import { HomeComponent } from './home/home.component';
import { NestedlistComponent } from './nestedlist/nestedlist.component';
import { NestedsingleComponent } from './nestedsingle/nestedsingle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NestedRecursiveComponent } from './nested-recursive/nested-recursive.component';
import { TreeviewComponent } from './treeview/treeview.component';
// import { ComponentsModule } from '../app/components.module';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
// import { MatMenuTrigger } from '@angular/material';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    HomeComponent,
    NestedlistComponent,
    NestedsingleComponent,
    NestedRecursiveComponent,
    TreeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule
    // MatMenuTrigger
    // ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
