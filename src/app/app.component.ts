import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { CustomLayoutComponent } from './components/custom-layout/custom-layout.component';



@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(private replaceableComponent : ReplaceableComponentsService){
    this.replaceableComponent.add(
      {
        component: CustomLayoutComponent,
        key: eThemeBasicComponents.ApplicationLayout
      }
    );
  }
}
