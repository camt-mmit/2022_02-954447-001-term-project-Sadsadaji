/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

import { EpisodesListComponent } from '../../../episodes/episodes-list/episodes-list.component';
import { List, Episodes, SearchData } from '../../../models';
import { EpisodesService } from '../../../services/episodes.service';

@Component({
  selector: 'bobs-burger-episodes-list-page',
  standalone: true,
  imports: [CommonModule, EpisodesListComponent],
  templateUrl: './episodes-list-page.component.html',
  styleUrls: ['./episodes-list-page.component.scss'],
})
export class EpisodesListPageComponent {
  protected readonly data$: Observable<List<Episodes>>;

  protected searchData: SearchData | undefined;

  constructor(
    dataService: EpisodesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.searchData = route.snapshot.queryParams;

    this.data$ = dataService.getAll().pipe(
      switchMap((list) => {
        return route.queryParams.pipe(
          map((params) => {
            if (params['search']) {
              const regex = new RegExp(params['search'], 'i');
              const results = list.results;
              return {
                results: results.filter((value) => {
                  return value.name.search(regex) >= 0;
                }),
              };
            }
            return list;
          }),
        );
      }),
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
      replaceUrl: true,
    });
  }

  protected doSelect(item: Episodes): void {
    if (item.url) {
      const paths = item.url.pathname.split('/');
      const id = paths[paths.length - 1];

      this.router.navigate([id], {
        relativeTo: this.route,
      });
    }
  }
}
