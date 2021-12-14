import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PereNoelComponent } from './pere-noel/pere-noel.component';
import { EnfantComponent } from './enfant/enfant.component';
import { CadeauCardComponent } from './components/cadeau-card/cadeau-card.component';
import { CadeauListComponent } from './components/cadeau-list/cadeau-list.component';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';

@NgModule({
  declarations: [
    AppComponent,
    PereNoelComponent,
    EnfantComponent,
    CadeauCardComponent,
    CadeauListComponent,
    CadeauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
