import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule,AmexioEnterpriseModule } from "amexio-ng-extensions";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//import {FormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavbarDemo } from "./navbar.demo.component";
import { DataGridComponent } from "../data-grid/data-grid.component"
import { AmexioReactiveFormsComponent } from "../amexio-reactive-forms/amexio-reactive-forms.component"
import { StepwizardDemo } from "../stepwizard/stepwizard.demo";

@NgModule({
  declarations: [NavbarDemo,
    DataGridComponent,
    AmexioReactiveFormsComponent,
    StepwizardDemo
  ],
  imports: [CommonModule, FormsModule, AmexioWidgetModule, ReactiveFormsModule,AmexioEnterpriseModule,

    RouterModule.forChild([
      {path: '', component: NavbarDemo, pathMatch: 'full'},
      {path: 'datagrid', component: DataGridComponent},
      {path: 'reactiveform', component: AmexioReactiveFormsComponent},
      {path: 'stepwiard', component: StepwizardDemo},
    ])],
  providers: []
})
export class NavbarDemoModule {

}
