import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'navbar-demo', pathMatch: 'full'
  },
  {
    path: 'navbar-demo', loadChildren: './navbar/navbar.demo.module#NavbarDemoModule'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
