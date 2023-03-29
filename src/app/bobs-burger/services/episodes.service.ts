import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseEpisodesList, parseEpisodes } from '../helpers';
import { List, Episodes, RawList, RawEpisodes, SearchData } from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/episodes';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<List<Episodes>> {
    return this.http
      .get<RawList<RawEpisodes>>(url, { params: searchData })
      .pipe(map((obj) => parseEpisodesList(obj)));
  }

  get(id: string): Observable<Episodes> {
    return this.http
      .get<RawEpisodes>(`${url}/${id}`)
      .pipe(map((obj) => parseEpisodes(obj)));
  }
}
