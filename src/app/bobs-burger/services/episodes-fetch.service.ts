/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { parseEpisodesList } from '../helpers';
import { List, Episodes } from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/episodes';

@Injectable({
  providedIn: 'root',
})
export class EpisodesFetchService {
  constructor() {}

  async getAll(): Promise<List<Episodes>> {
    const res = await fetch(url);
    return parseEpisodesList(await res.json());
  }
}
