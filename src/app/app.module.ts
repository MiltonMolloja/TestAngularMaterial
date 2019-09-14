import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { PaymentsComponent } from './components/payments/payments.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AutomaticDebitComponent } from './components/automatic-debit/automatic-debit.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaymentsComponent,
    SummaryComponent,
    AutomaticDebitComponent,
    ContactComponent,
    ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
