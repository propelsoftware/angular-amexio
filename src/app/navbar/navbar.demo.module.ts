import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NavbarDemo} from "./navbar.demo.component";
@NgModule({
  declarations: [NavbarDemo],
  imports: [CommonModule, FormsModule, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: NavbarDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class NavbarDemoModule {

}
