import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FluentGridComponent } from './components/fluent-grid/fluent-grid.component';
import { FluentUiComponent } from './components/fluent-ui/fluent-ui.component';
import { Home2Component } from './components/home2/home2.component';
import { PrimengDynamicComponent } from './primeng-table/primeng-dynamic/primeng-dynamic.component';
import { PrimengPaginationComponent } from './primeng-table/primeng-pagination/primeng-pagination.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },

  { path: 'home2',component: Home2Component },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'fluentui',component: FluentUiComponent },
  { path: 'fluentgrid',component: FluentGridComponent },
  { path: 'dynamicTable', component: PrimengDynamicComponent },
  { path: 'primengPagination', component: PrimengPaginationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
