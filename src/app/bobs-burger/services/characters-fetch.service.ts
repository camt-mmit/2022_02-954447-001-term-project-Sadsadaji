/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { parseCharactersList } from '../helpers';
import { List, Characters } from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/characters/';

@Injectable({
  providedIn: 'root',
})
export class CharactersFetchService {
  constructor() {}

  async getAll(): Promise<List<Characters>> {
    const res = await fetch(url);
    return parseCharactersList(await res.json());
  }
}
