import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library

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
    //DataGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
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
