/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { EpisodesViewComponent } from '../../../episodes/episodes-view/episodes-view.component';
import { Episodes } from '../../../models';
import { EpisodesService } from '../../../services/episodes.service';

@Component({
  selector: 'bobs-burger-episodes-view-page',
  standalone: true,
  imports: [CommonModule, EpisodesViewComponent],
  templateUrl: './episodes-view-page.component.html',
  styleUrls: ['./episodes-view-page.component.scss'],
})
export class EpisodesViewPageComponent {
  protected readonly data$: Observable<Episodes>;

  constructor(
    private readonly dataService: EpisodesService,
    private readonly route: ActivatedRoute,
  ) {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.dataService.get(params['id'])),
    );
  }

  protected doBack(): void {
    history.back();
  }
}
