import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NavbarDemo} from "./navbar.demo.component";
import { DataGridComponent } from "../data-grid/data-grid.component"
import { AmexioReactiveFormsComponent } from "../amexio-reactive-forms/amexio-reactive-forms.component"

@NgModule({
  declarations: [NavbarDemo,
                 DataGridComponent,
                AmexioReactiveFormsComponent
              ],
  imports: [CommonModule, FormsModule, AmexioWidgetModule, ReactiveFormsModule, 
    
    RouterModule.forChild([{
    path: '', component: NavbarDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class NavbarDemoModule {

}
