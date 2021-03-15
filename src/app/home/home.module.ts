import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DinamicFormModule } from '../dinamic-form/dinamic-form.module';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatSliderModule } from '@angular/material/slider'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 

import { HomeRoutingModule } from './home-routing.module';
import { PipesModule } from '../pipes/pipes.module';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { FilterDialogComponent } from './index/filter-dialog/filter-dialog.component';
import { OrderComponent } from './order/order.component';
import { FilterComponent } from './order/filter/filter.component';
import { QuestionComponent } from './question/question.component';
import { FilterQuestionComponent } from './question/filter-question/filter-question.component';
import { ConfirmDialogComponent } from './question/confirm-dialog/confirm-dialog.component';
import { AswerDialogComponent } from './question/aswer-dialog/aswer-dialog.component';
import { ItemComponent } from './item/item.component';
import { NewItemDialogComponent } from './item/new-item-dialog/new-item-dialog.component';
import { SellerComponent } from './seller/seller.component';
import { ItemViewComponent } from './index/item-view/item-view.component';
import { ConfigComponent } from './config/config.component';
import { PricingComponent } from './pricing/pricing.component';
import { UserInfoComponent } from './index/user-info/user-info.component';
import { StatusComponent } from './index/user-info/status/status.component';
import { DataComponent } from './index/user-info/data/data.component';
import { NoticeComponent } from './index/user-info/notice/notice.component';
import { BalanceComponent } from './index/user-info/balance/balance.component';
import { SettingDialogComponent } from './question/setting-dialog/setting-dialog.component';
import { BlListDialogComponent } from './question/setting-dialog/bl-list-dialog/bl-list-dialog.component';
import { BlAddDialogComponent } from './question/setting-dialog/bl-add-dialog/bl-add-dialog.component';
import { BlRmDialogComponent } from './question/setting-dialog/bl-rm-dialog/bl-rm-dialog.component';

import { SettingOrderDialogComponent } from './order/setting-dialog/setting-dialog.component';
import { BlListOrderDialogComponent } from './order/setting-dialog/bl-list-dialog/bl-list-dialog.component';
import { BlAddOrderDialogComponent } from './order/setting-dialog/bl-add-dialog/bl-add-dialog.component';
import { BlRmOrderDialogComponent } from './order/setting-dialog/bl-rm-dialog/bl-rm-dialog.component';
import { FilterItemDialogComponent } from './item/filter-item-dialog/filter-item-dialog.component';
import { InfoItemDialogComponent } from './item/info-item-dialog/info-item-dialog.component';
import { UpItemDialogComponent } from './item/up-item-dialog/up-item-dialog.component';
import { QuestionViewComponent } from './question/question-view/question-view.component';
import { QuestionItemDialogComponent } from './item/question-item-dialog/question-item-dialog.component';
import { MessageOrderDialogComponent } from './order/message-order-dialog/message-order-dialog.component';
import { ItemsDialogComponent } from './order/items-dialog/items-dialog.component';
import { CloneDialogComponent } from './index/item-view/clone-dialog/clone-dialog.component';
import { FormUserComponent } from './config/form-user/form-user.component';
import { FormClientComponent } from './config/form-client/form-client.component';
import { AccontComponent } from './config/accont/accont.component';
import { ClaimComponent } from './claim/claim.component';
import { FilterClaimDialogComponent } from './claim/filter-claim-dialog/filter-claim-dialog.component';
import { ClaimMessagesComponent } from './claim/claim-messages/claim-messages.component';
import { ClaimDetailsComponent } from './claim/claim-details/claim-details.component';
import { ReviewComponent } from './index/item-view/review/review.component';
import { VariationsComponent } from './item/info-item-dialog/variations/variations.component';
import { AttributesComponent } from './item/info-item-dialog/attributes/attributes.component';


@NgModule({
  declarations: [
    IndexComponent, 
    HomeComponent, 
    MenuComponent, 
    FilterDialogComponent, 
    OrderComponent, 
    FilterComponent, 
    QuestionComponent, 
    FilterQuestionComponent, 
    ConfirmDialogComponent, 
    AswerDialogComponent, 
    ItemComponent, 
    NewItemDialogComponent, 
    SellerComponent, 
    ItemViewComponent, 
    ConfigComponent, 
    PricingComponent, 
    UserInfoComponent, 
    StatusComponent, 
    DataComponent, 
    NoticeComponent,
    BalanceComponent,
    SettingDialogComponent,
    BlListDialogComponent,
    BlAddDialogComponent,
    BlRmDialogComponent,
    SettingOrderDialogComponent,
    BlListOrderDialogComponent,
    BlAddOrderDialogComponent,
    BlRmOrderDialogComponent,
    FilterItemDialogComponent,
    InfoItemDialogComponent,
    UpItemDialogComponent,
    QuestionViewComponent,
    QuestionItemDialogComponent,
    MessageOrderDialogComponent,
    ItemsDialogComponent,
    CloneDialogComponent,
    FormUserComponent,
    FormClientComponent,
    AccontComponent,
    ClaimComponent,
    FilterClaimDialogComponent,
    ClaimMessagesComponent,
    ClaimDetailsComponent,
    ReviewComponent,
    VariationsComponent,
    AttributesComponent
  ],
  imports: [
    PipesModule,
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSidenavModule,
    DinamicFormModule,
    MatBadgeModule
  ]
})
export class HomeModule { }
