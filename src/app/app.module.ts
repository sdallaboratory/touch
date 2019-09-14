import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptorService } from './interceptors/api-interceptor.service';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { HomeComponent } from './components/home/home.component';
import { InitService } from './services/init.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    HttpClientModule,
    MaterialImportsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: (init: InitService) => () => init.init(),
      deps: [InitService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }