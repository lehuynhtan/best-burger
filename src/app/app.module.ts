import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ServiceComponent } from './Components/service/service.component';
import { MenuComponent } from './Components/menu/menu.component';
import { GridlistComponent } from './Components/gridlist/gridlist.component';
import { ContactComponent } from './Components/contact/contact.component';
import { InfoComponent } from './Components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServiceComponent,
    MenuComponent,
    GridlistComponent,
    ContactComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
