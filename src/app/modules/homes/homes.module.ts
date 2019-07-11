import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import { HomesRoutingModule } from './homes-routing.module';
import { HomeListComponent } from './containers/home-list/home-list.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [HomeListContainerComponent, HomeListComponent, HomeComponent],
  imports: [CommonModule, HomesRoutingModule],
})
export class HomesModule {}
