import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { CardsComponent } from './cards/cards.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'beneficiaries', component: BeneficiariesComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'vendors', component: VendorsComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'audit-trails', component: AuditTrailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
