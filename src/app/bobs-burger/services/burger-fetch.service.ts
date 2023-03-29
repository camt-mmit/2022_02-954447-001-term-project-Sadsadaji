/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { parseBurgerList } from '../helpers';
import { List, Burgers } from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay';

@Injectable({
  providedIn: 'root',
})
export class BurgerFetchService {
  constructor() {}

  async getAll(): Promise<List<Burgers>> {
    const res = await fetch(url);
    return parseBurgerList(await res.json());
  }
}
