export type Show = {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  url: string;
  genres: string[];
}

export type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  url: string;
}