import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CanvasOverviewComponent } from './components/canvas-overview/canvas-overview.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { TeamsmateComponent } from './components/teamsmate/teamsmate.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home-overview', component: HomeComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'teams-mate-overview', component: TeamsmateComponent },
  { path: 'canvas-overview', component: CanvasOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
