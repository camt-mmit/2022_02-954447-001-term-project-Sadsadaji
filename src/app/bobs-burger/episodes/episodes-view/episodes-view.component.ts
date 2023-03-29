/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episodes } from '../../models';

@Component({
  selector: 'bobs-burger-episodes-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes-view.component.html',
  styleUrls: ['./episodes-view.component.scss'],
})
export class EpisodesViewComponent implements OnInit {
  @Input() data!: Episodes;

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }
  }
}
