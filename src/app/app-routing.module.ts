import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./not-found.component";
const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'e-Folder_Home', component: AppComponent},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
