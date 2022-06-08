import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LayoutComponent } from './layout.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
     // {path: '', redirectTo: 'main', pathMatch: 'prefix'},
      {
        path: 'first', component: FirstComponent
        // loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
      },
      {
        path: 'second',component:SecondComponent
        // loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
