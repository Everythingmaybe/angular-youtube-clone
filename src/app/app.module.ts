import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { HeaderModule } from '@features/header/header.module';
import { SidenavModule } from '@features/sidenav/sidenav.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HeaderModule,
    SidenavModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
