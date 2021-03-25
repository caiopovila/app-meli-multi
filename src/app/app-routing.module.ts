import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './config/guard.guard';
import { IndexGuardGuard } from './config/index-guard.guard';
import { HomeModule } from './home/home.module';
import { IndexPComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: IndexPComponent, canActivate: [IndexGuardGuard] },
  { path: 'home', loadChildren: () => HomeModule, canActivate: [GuardGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
