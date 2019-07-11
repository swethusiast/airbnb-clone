import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import {
  HomeTypes,
  Filters,
} from 'src/app/modules/core/containers/header-container/header-container.component';
export interface Home {
  type: HomeTypes;
  title: string;
  location: string;
  price: number;
  image_url: string;
  rating: {
    count: number;
    stars: number;
  };
}
@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less'],
})
export class HomeListContainerComponent implements OnInit {
  homes$ = this.dataService.getHomes$();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getFiltersFromUrlQueryParams()
      .subscribe((filters: Filters) => {
        this.dataService.loadHomes(filters);
      });
  }
}
