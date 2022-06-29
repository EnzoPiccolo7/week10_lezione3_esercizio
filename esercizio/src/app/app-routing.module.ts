import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagePage } from './pages/homepage/homepage.page';
import { RubricaPage } from './pages/rubrica/rubrica.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage
    },
    {
      path: 'rubrica',
    component: RubricaPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
