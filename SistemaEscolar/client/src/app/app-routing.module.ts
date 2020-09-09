import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyComponent } from './landing/academy/academy.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';
import { NavComponent } from './landing/nav/nav.component';
import { IndexComponent } from './landing/index/index.component';
import { InstitutionComponent } from './landing/institution/institution.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'institution',
    component: InstitutionComponent
  },
  {
    path: 'academy',
    component: AcademyComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
