import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';

const routes: Routes = [
  {path:"cadeaux",component:CadeauxComponent},
  // {path:"nouveaCadeau",component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
