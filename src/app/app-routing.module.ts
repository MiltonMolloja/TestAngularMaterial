import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AutomaticDebitComponent } from './components/automatic-debit/automatic-debit.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';


const routes: Routes = [
  {path: 'payments',
  component: PaymentsComponent},
  {path: 'summary',
  component: SummaryComponent},
  {path: 'automatic-debit',
  component: AutomaticDebitComponent},
  {path: 'contact',
  component: ContactComponent},
  {path: 'configuration',
  component: ConfigurationComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
