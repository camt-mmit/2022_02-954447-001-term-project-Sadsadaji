import {
  Burgers,
  Characters,
  Episodes,
  List,
  RawBurgers,
  RawCharacters,
  RawEpisodes,
  RawList,
} from './models';

export function parseList<I, O>(
  obj: RawList<I>,
  parser: (value: I) => O,
): List<O> {
  return {
    ...obj,
    next: obj.next ? new URL(obj.next) : null,
    previous: obj.previous ? new URL(obj.previous) : null,
    results: obj.results.map((value) => parser(value)),
  };
}
//Characters
export function parseCharacters(obj: RawCharacters): Characters {
  return {
    ...obj,
    url: new URL(obj.url),
    image: new URL(obj.image),
    relatives: obj.relatives.map((value) => String(value)),
  };
}

export function parseCharactersList(
  obj: RawList<RawCharacters>,
): List<Characters> {
  return parseList(obj, parseCharacters);
}
//Episodes
export function parseEpisodes(obj: RawEpisodes): Episodes {
  return {
    ...obj,
    url: new URL(obj.url),
  };
}

export function parseEpisodesList(obj: RawList<RawEpisodes>): List<Episodes> {
  return parseList(obj, parseEpisodes);
}
//Burgers
export function parseBurger(obj: RawBurgers): Burgers {
  return {
    ...obj,
    episodeUrl: new URL(obj.url),
    url: new URL(obj.url),
  };
}

export function parseBurgerList(obj: RawList<RawBurgers>): List<Burgers> {
  return parseList(obj, parseBurger);
}
