/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bobs-burger-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bobs-burger.component.html',
  styleUrls: ['./bobs-burger.component.scss'],
})
export class BobsBurgerComponent {}
