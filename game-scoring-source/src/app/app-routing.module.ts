import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixQuiPrendComponent } from './six-qui-prend/six-qui-prend.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'six-qui-prend', component: SixQuiPrendComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
