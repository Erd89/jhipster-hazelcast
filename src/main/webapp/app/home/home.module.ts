import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterHazelcastSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterHazelcastSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterHazelcastHomeModule {}
