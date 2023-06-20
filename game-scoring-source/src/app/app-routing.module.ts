import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixQuiPrendComponent } from './six-qui-prend/six-qui-prend.component';

const routes: Routes = [
  { path: 'six-qui-prend', component: SixQuiPrendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
