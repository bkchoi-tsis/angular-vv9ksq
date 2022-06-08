import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialExampleModule } from '../material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MemberDialogComponent } from './member-dialog/member-dialog.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    SidebarComponent,
    MemberDialogComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialExampleModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,SidebarComponent
  ]
})
export class LayoutModule { }
