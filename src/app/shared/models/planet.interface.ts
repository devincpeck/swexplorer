import { BaseObject } from "./base-object.interface";

export interface Planet extends BaseObject {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: [];
  films: [];
}
