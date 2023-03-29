/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { CharactersViewComponent } from '../../../characters/characters-view/characters-view.component';
import { Characters } from '../../../models';
import { CharactersService } from '../../../services/characters.service';

@Component({
  selector: 'bobs-burger-characters-view-page',
  standalone: true,
  imports: [CommonModule, CharactersViewComponent],
  templateUrl: './characters-view-page.component.html',
  styleUrls: ['./characters-view-page.component.scss'],
})
export class CharactersViewPageComponent {
  protected readonly data$: Observable<Characters>;

  constructor(
    private readonly dataService: CharactersService,
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
