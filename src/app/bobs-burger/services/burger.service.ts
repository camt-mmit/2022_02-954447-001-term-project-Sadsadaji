import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseBurgerList, parseBurger } from '../helpers';
import { List, Burgers, RawBurgers, SearchData } from '../models';

const url = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  constructor(private readonly http: HttpClient) {}

  getAll(searchData?: SearchData): Observable<List<Burgers>> {
    return this.http
      .get<RawBurgers[]>(url, { params: searchData })
      .pipe(map((obj) => parseBurgerList(obj)));
  }

  get(id: string): Observable<Burgers> {
    return this.http
      .get<RawBurgers>(`${url}/${id}`)
      .pipe(map((obj) => parseBurger(obj)));
  }
}
