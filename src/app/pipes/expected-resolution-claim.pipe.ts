import { Pipe, PipeTransform } from '@angular/core';
import { ExpectedResolutionsClaim } from '../interfaces/interface_claim';
import { ClaimService } from '../services/claim.service';

@Pipe({
  name: 'expectedResolutionClaim'
})
export class ExpectedResolutionClaimPipe implements PipeTransform {
  
  constructor(private claimService: ClaimService) { }

  transform(claimId: string, clientId: number): string {
    let ret = '';
    this.claimService.expectedResolutionsClaim(clientId, claimId)
    .subscribe((retExpectedResolution: Array<ExpectedResolutionsClaim>) => {
      retExpectedResolution.forEach((resolution) => {
          if (resolution.player_role === 'complainant') {
            ret = `Cliente #${resolution.user_id} espera ${resolution.expected_resolution} status: ${resolution.status}`;
          }
        });
    })
    return ret || 'Nada esperado.';
  }

}
