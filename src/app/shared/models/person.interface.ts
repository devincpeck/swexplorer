import { BaseObject } from "./base-object.interface";

export interface Person extends BaseObject {
  name?: string;
  birth_year?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;
  homeworld?: string;
  films?: [];
  species?: [];
  starships?: [];
  vehicles?: [];
}
