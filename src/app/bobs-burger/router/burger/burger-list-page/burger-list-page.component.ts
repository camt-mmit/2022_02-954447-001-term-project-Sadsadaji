/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { BurgerListComponent } from '../../../burger/burger-list/burger-list.component';
import { List, Burgers, SearchData } from '../../../models';
import { BurgerService } from '../../../services/burger.service';

@Component({
  selector: 'bobs-burger-burger-list-page',
  standalone: true,
  imports: [CommonModule, BurgerListComponent],
  templateUrl: './burger-list-page.component.html',
  styleUrls: ['./burger-list-page.component.scss'],
})
export class BurgerListPageComponent {
  protected readonly data$: Observable<List<Burgers>>;

  protected searchData: SearchData;

  constructor(
    dataService: BurgerService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => {
        console.debug(params);
        return dataService.getAll(params);
      }),
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
      /* replaceUrl: true */
    });
  }

  protected doSelect(item: Burgers): void {
    if (item.url) {
      const paths = item.url.pathname.split('/');
      const id = paths[paths.length - 2];

      this.router.navigate([id], {
        relativeTo: this.route,
      });
    }
  }
}
