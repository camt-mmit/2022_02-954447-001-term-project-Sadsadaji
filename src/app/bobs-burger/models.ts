type Raw<T, KI extends keyof T, O> = {
  [K in keyof T]: K extends KI ? O : T[K];
};

export type List<T> = {
  // count: number;
  // next: URL | null;
  // previous: URL | null;
  results: T[];
};

export type RawList<T> = List<T>;

export type SearchData = {
  search?: string;
  page?: string;
};

export type Characters = {
  id: number;
  name: string;
  image: URL;
  hairColor: string;
  age: string;
  gender: string | undefined;
  occupation: string | undefined;
  relatives: string[];
  firstEpisode: string | undefined;
  voicedBy: string | undefined;
  wikiUrl: URL;
  url: URL;
};

export type RawCharacters = Raw<
  Raw<Characters, 'url' | 'image', string>,
  'relatives',
  string[]
>;

export type Episodes = {
  id: number;
  name: string;
  productionCode: string | undefined;
  airDate: string | undefined;
  season: number | undefined;
  episode: number | undefined;
  totalViewers: string | undefined;
  url: URL;
};

export type RawEpisodes = Raw<Episodes, 'url', string>;

export type Burgers = {
  id: number;
  name: string;
  price: string;
  season: number;
  episode: number;
  episodeUrl: URL;
  url: URL;
};

export type RawBurgers = Raw<Raw<Burgers, 'episodeUrl', string>, 'url', string>;
