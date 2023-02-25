import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGameComponent } from './card-game/card-game.component';

const routes: Routes = [
  { path: '', redirectTo: "card-game", pathMatch: 'full'},
  { path: 'card-game', component: CardGameComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
