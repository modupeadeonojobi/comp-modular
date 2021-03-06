import { BioComponent } from './bio/bio.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CollectionsHomeComponent,
    children: [
      { path: '', component: BioComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
