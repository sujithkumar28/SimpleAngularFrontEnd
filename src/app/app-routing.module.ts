import { EditSawmillComponent } from './edit-sawmill/edit-sawmill.component';
import { LoginComponent } from './login/login.component';
import { SawmillComponent } from './sawmill/sawmill.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'sawmill/:id', component: EditSawmillComponent },
      { path: 'sawmill', component: SawmillComponent }



    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
