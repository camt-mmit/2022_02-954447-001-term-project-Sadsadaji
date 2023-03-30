/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

import { CharactersListComponent } from '../../../characters/characters-list/characters-list.component';
import { List, Characters, SearchData } from '../../../models';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'bobs-burger-characters-list-page',
  standalone: true,
  imports: [CommonModule, CharactersListComponent],
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent {
  protected readonly data$: Observable<List<Characters>>;

  protected searchData: SearchData | undefined;

  constructor(
    dataService: CharactersService,
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
  protected doSelect(item: Characters): void {
    if (item.url) {
      const paths = item.url.pathname.split('/');
      const id = paths[paths.length - 1];

      this.router.navigate([id], {
        relativeTo: this.route,
      });
    }
  }
}
