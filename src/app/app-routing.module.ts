import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditProductViewComponent } from './views/edit-product-view/edit-product-view.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { NewProductViewComponent } from './views/new-product-view/new-product-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';

const routes: Routes = [
  {path: 'auth',component:AuthViewComponent},
  {path: '', canActivate:[AuthGuardService], component:DashboardComponent},
  {path: 'dashboard', canActivate:[AuthGuardService], component:DashboardComponent},
  {path: 'produit/new', canActivate:[AuthGuardService], component:NewProductViewComponent},
  {path: 'produit/edit/:id', canActivate:[AuthGuardService], component:EditProductViewComponent},
  {path: 'produit/:id', canActivate:[AuthGuardService], component:ProductViewComponent},
  {path: 'profil', canActivate:[AuthGuardService], component:ProfilViewComponent},
  {path: '404', component:ErrorPageComponent},
  {path: '**', redirectTo:'404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
