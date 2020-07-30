import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterHazelcastSharedModule } from 'app/shared/shared.module';
import { JhipsterHazelcastCoreModule } from 'app/core/core.module';
import { JhipsterHazelcastAppRoutingModule } from './app-routing.module';
import { JhipsterHazelcastHomeModule } from './home/home.module';
import { JhipsterHazelcastEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterHazelcastSharedModule,
    JhipsterHazelcastCoreModule,
    JhipsterHazelcastHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterHazelcastEntityModule,
    JhipsterHazelcastAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterHazelcastAppModule {}
