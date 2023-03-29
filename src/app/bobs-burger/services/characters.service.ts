import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseCharactersList, parseCharacters } from '../helpers';
import {
  List,
  Characters,
  RawList,
  RawCharacters,
  SearchData,
} from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<List<Characters>> {
    return this.http
      .get<RawList<RawCharacters>>(url, { params: searchData })
      .pipe(map((obj) => parseCharactersList(obj)));
  }

  get(id: string): Observable<Characters> {
    return this.http
      .get<RawCharacters>(`${url}/${id}`)
      .pipe(map((obj) => parseCharacters(obj)));
  }
}
