/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burgers } from '../../models';

@Component({
  selector: 'bobs-burger-burger-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-view.component.html',
  styleUrls: ['./burger-view.component.scss'],
})
export class BurgerViewComponent implements OnInit {
  @Input() data!: Burgers;

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }
  }
}
