import { BaseObject } from "./base-object.interface";

export interface Movie extends BaseObject {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: number;
  species: [];
  starships: [];
  vehicles: [];
  characters: [];
  planets: [];
}
