/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Characters } from '../../models';

@Component({
  selector: 'bobs-burger-characters-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss'],
})
export class CharactersViewComponent implements OnInit {
  @Input() data!: Characters;

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required`);
    }
  }
}
