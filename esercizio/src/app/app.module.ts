import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagePage } from './pages/homepage/homepage.page';
import { RubricaPage } from './pages/rubrica/rubrica.page';
import { NavbarComponent } from './compontes/navbar/navbar.component';
import { FooterComponent } from './compontes/footer/footer.component';
import { NewComponent } from './compontes/new/new.component';
import { ListComponent } from './compontes/list/list.component';
import { CardComponent } from './compontes/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagePage,
    RubricaPage,
    NavbarComponent,
    FooterComponent,
    NewComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
