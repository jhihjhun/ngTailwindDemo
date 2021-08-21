import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookUIComponent } from './facebook-ui/facebook-ui.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'facebook-ui', component: FacebookUIComponent
  },
  {
    path: '', redirectTo: '/pricing', pathMatch: 'full' // 預設路由
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
