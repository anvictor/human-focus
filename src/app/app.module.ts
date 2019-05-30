import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DemoMaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./layout/layout";
import {Tab} from "./tab/tab";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Table} from "./table/table";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
    LayoutComponent,
    Tab,
    Table
  ],
  bootstrap: [LayoutComponent],

})
export class AppModule { }
