import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonClaimPipe } from '../pipes/reason-claim.pipe';
import { ReasonClaimResolutionPipe } from '../pipes/reason-claim-resolution.pipe';
import { PlayerActionClaimPipe } from '../pipes/player-action-claim.pipe';
import { ExpectedResolutionClaimPipe } from '../pipes/expected-resolution-claim.pipe';
import { ExpectedResolutionClaimDetailPipe } from '../pipes/expected-resolution-claim-detail.pipe';
import { ShippingModePipe } from './shipping-mode.pipe';


@NgModule({
  declarations: [
    ReasonClaimResolutionPipe,
    ExpectedResolutionClaimDetailPipe,
    ExpectedResolutionClaimPipe,
    ReasonClaimPipe,
    PlayerActionClaimPipe,
    ShippingModePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReasonClaimResolutionPipe,
    ExpectedResolutionClaimDetailPipe,
    ExpectedResolutionClaimPipe,
    ReasonClaimPipe,
    PlayerActionClaimPipe,
    ShippingModePipe
  ]
})
export class PipesModule { }
