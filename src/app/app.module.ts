import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';
import { VendorsComponent } from './vendors/vendors.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './google-map/google-map.component'



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent,
    BeneficiariesComponent,
    BodyComponent,
    CardsComponent,
    VendorsComponent,
    TransactionsComponent,
    ReportsComponent,
    UsersComponent,
    AuditTrailsComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    GoogleMapsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
