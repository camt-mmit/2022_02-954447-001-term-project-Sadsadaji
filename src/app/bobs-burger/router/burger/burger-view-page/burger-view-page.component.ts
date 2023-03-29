import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { BurgerViewComponent } from '../../../burger/burger-view/burger-view.component';
import { Burgers } from '../../../models';
import { BurgerService } from '../../../services/burger.service';

@Component({
  selector: 'bobs-burger-burger-view-page',
  standalone: true,
  imports: [CommonModule, BurgerViewComponent],
  templateUrl: './burger-view-page.component.html',
  styleUrls: ['./burger-view-page.component.scss'],
})
export class BurgerViewPageComponent {
  protected readonly data$: Observable<Burgers>;

  constructor(
    private readonly dataService: BurgerService,
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
