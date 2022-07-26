import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { CustomLayoutComponent } from './components/custom-layout/custom-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SlidenavComponent } from './components/slidenav/slidenav.component';
import { Home2Component } from './components/home2/home2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PrimengTableModule } from './primeng-table/primeng-table.module';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule} from '@angular/material/tree';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FluentUiComponent } from './components/fluent-ui/fluent-ui.component';

// import { AuthModule } from '@auth0/auth0-angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FluentGridComponent } from './components/fluent-grid/fluent-grid.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeBasicModule.forRoot(),
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTreeModule,
    MatSlideToggleModule,
    PrimengTableModule

  ],
  declarations: [AppComponent,
                 CustomLayoutComponent,
                 HeaderComponent,
                 SlidenavComponent,
                //  Home2Component,
                 DashboardComponent,
                FluentUiComponent,
                FluentGridComponent,

                 ],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
