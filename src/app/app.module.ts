import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/shared/interceptors/interceptor.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    ToastrModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [ InterceptorService, {    
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,  
  }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
