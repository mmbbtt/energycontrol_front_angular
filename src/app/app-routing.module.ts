import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ErrorComponent } from './layout/error/error.component';
import { LoadBillNaturgyComponent } from './features/load-bill-naturgy/load-bill-naturgy.component';
import { MsourcesComponent } from './features/msources/msources.component'

const routes: Routes = [
   {path: '', component: HomeComponent}
  ,{path: 'home', component: HomeComponent}
  ,{path: 'loadBillNaturgy', component: LoadBillNaturgyComponent}
  ,{path: 'msourcesComponent', component: MsourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
