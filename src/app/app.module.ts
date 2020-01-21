import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
import { DataGridComponent } from "./data-grid/data-grid.component"
import { AmexioReactiveFormsComponent } from "./amexio-reactive-forms/amexio-reactive-forms.component"

//Dashboard,Charts & Maps are available as seperate module (not in AmexioWidgetModule)
import {
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioMapModule
} from "amexio-ng-extensions";

// import { AmexioDataModule, CommonDataService } from 'amexio-ng-extensions';
// import { AmexioLayoutModule } from 'amexio-ng-extensions';
// import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    AmexioReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,ReactiveFormsModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    //AmexioDataModule,
    //AmexioLayoutModule,
    AppRoutingModule
  ],
  providers: [//CommonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
