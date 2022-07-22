import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionComponent} from "./page/region/region.component";
import {DepartementsComponent} from "./page/departements/departements.component";

const routes: Routes = [
  {path: 'region', component: RegionComponent},
  {path: 'departement', component: DepartementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
