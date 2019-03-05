import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabBodyComponent } from './tab-body.component';
import { BlueComponent } from './blue.component';
import { RedComponent } from './red.component';
import { TabsService } from './tabs.service';
import { NewTabGuard } from './new-tab.guard';

@NgModule({
  declarations: [
    AppComponent,
    TabBodyComponent,
    BlueComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TabsService,
    NewTabGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
