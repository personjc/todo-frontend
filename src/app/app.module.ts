import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskListService } from './task-list.service';
import { NoCacheHeadersInterceptor } from './no-cache-headers-interceptor/no-cache-headers-interceptor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSideNavComponent } from './list-side-nav/list-side-nav.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ListSideNavComponent,
    ListMenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    TaskService,
    TaskListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
