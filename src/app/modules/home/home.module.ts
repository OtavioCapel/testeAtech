import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from 'src/shared/components/search-user/search-user.component';
import { ProfileCardComponent } from 'src/shared/components/profile-card/profile-card.component';
import { CardComponent } from 'src/shared/components/card/card.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ProfileCardComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
