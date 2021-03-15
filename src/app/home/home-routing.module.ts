import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { PricingComponent } from './pricing/pricing.component';
import { QuestionComponent } from './question/question.component';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: 'sales', component: OrderComponent },
    { path: 'questions', component: QuestionComponent },
    { path: 'items', component: ItemComponent },
    { path: 'sellers', component: SellerComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'claim', component: ClaimComponent },
    { path: '', component: IndexComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
