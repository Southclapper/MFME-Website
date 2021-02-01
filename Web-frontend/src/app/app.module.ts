import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbUserModule, NbMenuModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TeamsmateComponent } from './components/teamsmate/teamsmate.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { CanvasOverviewComponent } from './components/canvas-overview/canvas-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsmateComponent,
    HomeComponent,
    ProjectOverviewComponent,
    CanvasOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
