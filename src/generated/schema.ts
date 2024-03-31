// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
  String: string;
  Int: number;
  Boolean: boolean;
  ID: string;
  Float: number;
};

export interface Root {
  allFilms: FilmsConnection | null;
  film: Film | null;
  allPeople: PeopleConnection | null;
  person: Person | null;
  allPlanets: PlanetsConnection | null;
  planet: Planet | null;
  allSpecies: SpeciesConnection | null;
  species: Species | null;
  allStarships: StarshipsConnection | null;
  starship: Starship | null;
  allVehicles: VehiclesConnection | null;
  vehicle: Vehicle | null;
  /** Fetches an object given its ID */
  node: Node | null;
  __typename: "Root";
}

/** A connection to a list of items. */
export interface FilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "FilmsConnection";
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Scalars["String"] | null;
  /** When paginating forwards, the cursor to continue. */
  endCursor: Scalars["String"] | null;
  __typename: "PageInfo";
}

/** An edge in a connection. */
export interface FilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmsEdge";
}

/** A single film. */
export interface Film {
  /** The title of this film. */
  title: Scalars["String"] | null;
  /** The episode number of this film. */
  episodeID: Scalars["Int"] | null;
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl: Scalars["String"] | null;
  /** The name of the director of this film. */
  director: Scalars["String"] | null;
  /** The name(s) of the producer(s) of this film. */
  producers: (Scalars["String"] | null)[] | null;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate: Scalars["String"] | null;
  speciesConnection: FilmSpeciesConnection | null;
  starshipConnection: FilmStarshipsConnection | null;
  vehicleConnection: FilmVehiclesConnection | null;
  characterConnection: FilmCharactersConnection | null;
  planetConnection: FilmPlanetsConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Film";
}

/** An object with an ID */
export type Node = (Film | Species | Planet | Person | Starship | Vehicle) & {
  __isUnion?: true;
};

/** A connection to a list of items. */
export interface FilmSpeciesConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmSpeciesEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species: (Species | null)[] | null;
  __typename: "FilmSpeciesConnection";
}

/** An edge in a connection. */
export interface FilmSpeciesEdge {
  /** The item at the end of the edge */
  node: Species | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmSpeciesEdge";
}

/** A type of person or character within the Star Wars Universe. */
export interface Species {
  /** The name of this species. */
  name: Scalars["String"] | null;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification: Scalars["String"] | null;
  /** The designation of this species, such as "sentient". */
  designation: Scalars["String"] | null;
  /** The average height of this species in centimeters. */
  averageHeight: Scalars["Float"] | null;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan: Scalars["Int"] | null;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors: (Scalars["String"] | null)[] | null;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors: (Scalars["String"] | null)[] | null;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors: (Scalars["String"] | null)[] | null;
  /** The language commonly spoken by this species. */
  language: Scalars["String"] | null;
  /** A planet that this species originates from. */
  homeworld: Planet | null;
  personConnection: SpeciesPeopleConnection | null;
  filmConnection: SpeciesFilmsConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Species";
}

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export interface Planet {
  /** The name of this planet. */
  name: Scalars["String"] | null;
  /** The diameter of this planet in kilometers. */
  diameter: Scalars["Int"] | null;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: Scalars["Int"] | null;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod: Scalars["Int"] | null;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity: Scalars["String"] | null;
  /** The average population of sentient beings inhabiting this planet. */
  population: Scalars["Float"] | null;
  /** The climates of this planet. */
  climates: (Scalars["String"] | null)[] | null;
  /** The terrains of this planet. */
  terrains: (Scalars["String"] | null)[] | null;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater: Scalars["Float"] | null;
  residentConnection: PlanetResidentsConnection | null;
  filmConnection: PlanetFilmsConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Planet";
}

/** A connection to a list of items. */
export interface PlanetResidentsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PlanetResidentsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents: (Person | null)[] | null;
  __typename: "PlanetResidentsConnection";
}

/** An edge in a connection. */
export interface PlanetResidentsEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PlanetResidentsEdge";
}

/** An individual person or character within the Star Wars universe. */
export interface Person {
  /** The name of this person. */
  name: Scalars["String"] | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: Scalars["String"] | null;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: Scalars["String"] | null;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: Scalars["String"] | null;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor: Scalars["String"] | null;
  /** The height of the person in centimeters. */
  height: Scalars["Int"] | null;
  /** The mass of the person in kilograms. */
  mass: Scalars["Float"] | null;
  /** The skin color of this person. */
  skinColor: Scalars["String"] | null;
  /** A planet that this person was born on or inhabits. */
  homeworld: Planet | null;
  filmConnection: PersonFilmsConnection | null;
  /** The species that this person belongs to, or null if unknown. */
  species: Species | null;
  starshipConnection: PersonStarshipsConnection | null;
  vehicleConnection: PersonVehiclesConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Person";
}

/** A connection to a list of items. */
export interface PersonFilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PersonFilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "PersonFilmsConnection";
}

/** An edge in a connection. */
export interface PersonFilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PersonFilmsEdge";
}

/** A connection to a list of items. */
export interface PersonStarshipsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PersonStarshipsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: (Starship | null)[] | null;
  __typename: "PersonStarshipsConnection";
}

/** An edge in a connection. */
export interface PersonStarshipsEdge {
  /** The item at the end of the edge */
  node: Starship | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PersonStarshipsEdge";
}

/** A single transport craft that has hyperdrive capability. */
export interface Starship {
  /** The name of this starship. The common name, such as "Death Star". */
  name: Scalars["String"] | null;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model: Scalars["String"] | null;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass: Scalars["String"] | null;
  /** The manufacturers of this starship. */
  manufacturers: (Scalars["String"] | null)[] | null;
  /** The cost of this starship new, in galactic credits. */
  costInCredits: Scalars["Float"] | null;
  /** The length of this starship in meters. */
  length: Scalars["Float"] | null;
  /** The number of personnel needed to run or pilot this starship. */
  crew: Scalars["String"] | null;
  /** The number of non-essential people this starship can transport. */
  passengers: Scalars["String"] | null;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed: Scalars["Int"] | null;
  /** The class of this starships hyperdrive. */
  hyperdriveRating: Scalars["Float"] | null;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT: Scalars["Int"] | null;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity: Scalars["Float"] | null;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: Scalars["String"] | null;
  pilotConnection: StarshipPilotsConnection | null;
  filmConnection: StarshipFilmsConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Starship";
}

/** A connection to a list of items. */
export interface StarshipPilotsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (StarshipPilotsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots: (Person | null)[] | null;
  __typename: "StarshipPilotsConnection";
}

/** An edge in a connection. */
export interface StarshipPilotsEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "StarshipPilotsEdge";
}

/** A connection to a list of items. */
export interface StarshipFilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (StarshipFilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "StarshipFilmsConnection";
}

/** An edge in a connection. */
export interface StarshipFilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "StarshipFilmsEdge";
}

/** A connection to a list of items. */
export interface PersonVehiclesConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PersonVehiclesEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: (Vehicle | null)[] | null;
  __typename: "PersonVehiclesConnection";
}

/** An edge in a connection. */
export interface PersonVehiclesEdge {
  /** The item at the end of the edge */
  node: Vehicle | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PersonVehiclesEdge";
}

/** A single transport craft that does not have hyperdrive capability */
export interface Vehicle {
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name: Scalars["String"] | null;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model: Scalars["String"] | null;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass: Scalars["String"] | null;
  /** The manufacturers of this vehicle. */
  manufacturers: (Scalars["String"] | null)[] | null;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits: Scalars["Float"] | null;
  /** The length of this vehicle in meters. */
  length: Scalars["Float"] | null;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew: Scalars["String"] | null;
  /** The number of non-essential people this vehicle can transport. */
  passengers: Scalars["String"] | null;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed: Scalars["Int"] | null;
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity: Scalars["Float"] | null;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: Scalars["String"] | null;
  pilotConnection: VehiclePilotsConnection | null;
  filmConnection: VehicleFilmsConnection | null;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Scalars["String"] | null;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Scalars["String"] | null;
  /** The ID of an object */
  id: Scalars["ID"];
  __typename: "Vehicle";
}

/** A connection to a list of items. */
export interface VehiclePilotsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (VehiclePilotsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots: (Person | null)[] | null;
  __typename: "VehiclePilotsConnection";
}

/** An edge in a connection. */
export interface VehiclePilotsEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "VehiclePilotsEdge";
}

/** A connection to a list of items. */
export interface VehicleFilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (VehicleFilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "VehicleFilmsConnection";
}

/** An edge in a connection. */
export interface VehicleFilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "VehicleFilmsEdge";
}

/** A connection to a list of items. */
export interface PlanetFilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PlanetFilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "PlanetFilmsConnection";
}

/** An edge in a connection. */
export interface PlanetFilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PlanetFilmsEdge";
}

/** A connection to a list of items. */
export interface SpeciesPeopleConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (SpeciesPeopleEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people: (Person | null)[] | null;
  __typename: "SpeciesPeopleConnection";
}

/** An edge in a connection. */
export interface SpeciesPeopleEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "SpeciesPeopleEdge";
}

/** A connection to a list of items. */
export interface SpeciesFilmsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (SpeciesFilmsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (Film | null)[] | null;
  __typename: "SpeciesFilmsConnection";
}

/** An edge in a connection. */
export interface SpeciesFilmsEdge {
  /** The item at the end of the edge */
  node: Film | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "SpeciesFilmsEdge";
}

/** A connection to a list of items. */
export interface FilmStarshipsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmStarshipsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: (Starship | null)[] | null;
  __typename: "FilmStarshipsConnection";
}

/** An edge in a connection. */
export interface FilmStarshipsEdge {
  /** The item at the end of the edge */
  node: Starship | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmStarshipsEdge";
}

/** A connection to a list of items. */
export interface FilmVehiclesConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmVehiclesEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: (Vehicle | null)[] | null;
  __typename: "FilmVehiclesConnection";
}

/** An edge in a connection. */
export interface FilmVehiclesEdge {
  /** The item at the end of the edge */
  node: Vehicle | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmVehiclesEdge";
}

/** A connection to a list of items. */
export interface FilmCharactersConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmCharactersEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters: (Person | null)[] | null;
  __typename: "FilmCharactersConnection";
}

/** An edge in a connection. */
export interface FilmCharactersEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmCharactersEdge";
}

/** A connection to a list of items. */
export interface FilmPlanetsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (FilmPlanetsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: (Planet | null)[] | null;
  __typename: "FilmPlanetsConnection";
}

/** An edge in a connection. */
export interface FilmPlanetsEdge {
  /** The item at the end of the edge */
  node: Planet | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "FilmPlanetsEdge";
}

/** A connection to a list of items. */
export interface PeopleConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PeopleEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people: (Person | null)[] | null;
  __typename: "PeopleConnection";
}

/** An edge in a connection. */
export interface PeopleEdge {
  /** The item at the end of the edge */
  node: Person | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PeopleEdge";
}

/** A connection to a list of items. */
export interface PlanetsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (PlanetsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: (Planet | null)[] | null;
  __typename: "PlanetsConnection";
}

/** An edge in a connection. */
export interface PlanetsEdge {
  /** The item at the end of the edge */
  node: Planet | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "PlanetsEdge";
}

/** A connection to a list of items. */
export interface SpeciesConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (SpeciesEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species: (Species | null)[] | null;
  __typename: "SpeciesConnection";
}

/** An edge in a connection. */
export interface SpeciesEdge {
  /** The item at the end of the edge */
  node: Species | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "SpeciesEdge";
}

/** A connection to a list of items. */
export interface StarshipsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (StarshipsEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: (Starship | null)[] | null;
  __typename: "StarshipsConnection";
}

/** An edge in a connection. */
export interface StarshipsEdge {
  /** The item at the end of the edge */
  node: Starship | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "StarshipsEdge";
}

/** A connection to a list of items. */
export interface VehiclesConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (VehiclesEdge | null)[] | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Scalars["Int"] | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: (Vehicle | null)[] | null;
  __typename: "VehiclesConnection";
}

/** An edge in a connection. */
export interface VehiclesEdge {
  /** The item at the end of the edge */
  node: Vehicle | null;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  __typename: "VehiclesEdge";
}

export type Query = Root;

export interface RootGenqlSelection {
  allFilms?: FilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  film?: FilmGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; filmID?: Scalars["ID"] | null };
  };
  allPeople?: PeopleConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  person?: PersonGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; personID?: Scalars["ID"] | null };
  };
  allPlanets?: PlanetsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  planet?: PlanetGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; planetID?: Scalars["ID"] | null };
  };
  allSpecies?: SpeciesConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  species?: SpeciesGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; speciesID?: Scalars["ID"] | null };
  };
  allStarships?: StarshipsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  starship?: StarshipGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; starshipID?: Scalars["ID"] | null };
  };
  allVehicles?: VehiclesConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  vehicle?: VehicleGenqlSelection & {
    __args?: { id?: Scalars["ID"] | null; vehicleID?: Scalars["ID"] | null };
  };
  /** Fetches an object given its ID */
  node?: NodeGenqlSelection & {
    __args: {
      /** The ID of an object */
      id: Scalars["ID"];
    };
  };
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection {
  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | number;
  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | number;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | number;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A single film. */
export interface FilmGenqlSelection {
  /** The title of this film. */
  title?: boolean | number;
  /** The episode number of this film. */
  episodeID?: boolean | number;
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: boolean | number;
  /** The name of the director of this film. */
  director?: boolean | number;
  /** The name(s) of the producer(s) of this film. */
  producers?: boolean | number;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate?: boolean | number;
  speciesConnection?: FilmSpeciesConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  starshipConnection?: FilmStarshipsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  vehicleConnection?: FilmVehiclesConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  characterConnection?: FilmCharactersConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  planetConnection?: FilmPlanetsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An object with an ID */
export interface NodeGenqlSelection {
  /** The id of the object. */
  id?: boolean | number;
  on_Film?: FilmGenqlSelection;
  on_Species?: SpeciesGenqlSelection;
  on_Planet?: PlanetGenqlSelection;
  on_Person?: PersonGenqlSelection;
  on_Starship?: StarshipGenqlSelection;
  on_Vehicle?: VehicleGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmSpeciesConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmSpeciesEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: SpeciesGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmSpeciesEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: SpeciesGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A type of person or character within the Star Wars Universe. */
export interface SpeciesGenqlSelection {
  /** The name of this species. */
  name?: boolean | number;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: boolean | number;
  /** The designation of this species, such as "sentient". */
  designation?: boolean | number;
  /** The average height of this species in centimeters. */
  averageHeight?: boolean | number;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan?: boolean | number;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: boolean | number;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: boolean | number;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: boolean | number;
  /** The language commonly spoken by this species. */
  language?: boolean | number;
  /** A planet that this species originates from. */
  homeworld?: PlanetGenqlSelection;
  personConnection?: SpeciesPeopleConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  filmConnection?: SpeciesFilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export interface PlanetGenqlSelection {
  /** The name of this planet. */
  name?: boolean | number;
  /** The diameter of this planet in kilometers. */
  diameter?: boolean | number;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: boolean | number;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: boolean | number;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: boolean | number;
  /** The average population of sentient beings inhabiting this planet. */
  population?: boolean | number;
  /** The climates of this planet. */
  climates?: boolean | number;
  /** The terrains of this planet. */
  terrains?: boolean | number;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: boolean | number;
  residentConnection?: PlanetResidentsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  filmConnection?: PlanetFilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PlanetResidentsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PlanetResidentsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PlanetResidentsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An individual person or character within the Star Wars universe. */
export interface PersonGenqlSelection {
  /** The name of this person. */
  name?: boolean | number;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: boolean | number;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: boolean | number;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: boolean | number;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: boolean | number;
  /** The height of the person in centimeters. */
  height?: boolean | number;
  /** The mass of the person in kilograms. */
  mass?: boolean | number;
  /** The skin color of this person. */
  skinColor?: boolean | number;
  /** A planet that this person was born on or inhabits. */
  homeworld?: PlanetGenqlSelection;
  filmConnection?: PersonFilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The species that this person belongs to, or null if unknown. */
  species?: SpeciesGenqlSelection;
  starshipConnection?: PersonStarshipsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  vehicleConnection?: PersonVehiclesConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PersonFilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PersonFilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PersonFilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PersonStarshipsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PersonStarshipsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: StarshipGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PersonStarshipsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: StarshipGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A single transport craft that has hyperdrive capability. */
export interface StarshipGenqlSelection {
  /** The name of this starship. The common name, such as "Death Star". */
  name?: boolean | number;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: boolean | number;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: boolean | number;
  /** The manufacturers of this starship. */
  manufacturers?: boolean | number;
  /** The cost of this starship new, in galactic credits. */
  costInCredits?: boolean | number;
  /** The length of this starship in meters. */
  length?: boolean | number;
  /** The number of personnel needed to run or pilot this starship. */
  crew?: boolean | number;
  /** The number of non-essential people this starship can transport. */
  passengers?: boolean | number;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: boolean | number;
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: boolean | number;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: boolean | number;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: boolean | number;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: boolean | number;
  pilotConnection?: StarshipPilotsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  filmConnection?: StarshipFilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface StarshipPilotsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: StarshipPilotsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface StarshipPilotsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface StarshipFilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: StarshipFilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface StarshipFilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PersonVehiclesConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PersonVehiclesEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: VehicleGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PersonVehiclesEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: VehicleGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A single transport craft that does not have hyperdrive capability */
export interface VehicleGenqlSelection {
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: boolean | number;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: boolean | number;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass?: boolean | number;
  /** The manufacturers of this vehicle. */
  manufacturers?: boolean | number;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: boolean | number;
  /** The length of this vehicle in meters. */
  length?: boolean | number;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: boolean | number;
  /** The number of non-essential people this vehicle can transport. */
  passengers?: boolean | number;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed?: boolean | number;
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: boolean | number;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: boolean | number;
  pilotConnection?: VehiclePilotsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  filmConnection?: VehicleFilmsConnectionGenqlSelection & {
    __args?: {
      after?: Scalars["String"] | null;
      first?: Scalars["Int"] | null;
      before?: Scalars["String"] | null;
      last?: Scalars["Int"] | null;
    };
  };
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: boolean | number;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: boolean | number;
  /** The ID of an object */
  id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface VehiclePilotsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: VehiclePilotsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface VehiclePilotsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface VehicleFilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: VehicleFilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface VehicleFilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PlanetFilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PlanetFilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PlanetFilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface SpeciesPeopleConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: SpeciesPeopleEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface SpeciesPeopleEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface SpeciesFilmsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: SpeciesFilmsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: FilmGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface SpeciesFilmsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: FilmGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmStarshipsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmStarshipsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: StarshipGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmStarshipsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: StarshipGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmVehiclesConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmVehiclesEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: VehicleGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmVehiclesEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: VehicleGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmCharactersConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmCharactersEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmCharactersEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface FilmPlanetsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: FilmPlanetsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: PlanetGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface FilmPlanetsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PlanetGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PeopleConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PeopleEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: PersonGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PeopleEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PersonGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface PlanetsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: PlanetsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: PlanetGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface PlanetsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: PlanetGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface SpeciesConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: SpeciesEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: SpeciesGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface SpeciesEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: SpeciesGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface StarshipsConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: StarshipsEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: StarshipGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface StarshipsEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: StarshipGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** A connection to a list of items. */
export interface VehiclesConnectionGenqlSelection {
  /** Information to aid in pagination. */
  pageInfo?: PageInfoGenqlSelection;
  /** A list of edges. */
  edges?: VehiclesEdgeGenqlSelection;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: boolean | number;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: VehicleGenqlSelection;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** An edge in a connection. */
export interface VehiclesEdgeGenqlSelection {
  /** The item at the end of the edge */
  node?: VehicleGenqlSelection;
  /** A cursor for use in pagination */
  cursor?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export type QueryGenqlSelection = RootGenqlSelection;

const Root_possibleTypes: string[] = ["Root"];
export const isRoot = (obj?: { __typename?: any } | null): obj is Root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRoot"');
  return Root_possibleTypes.includes(obj.__typename);
};

const FilmsConnection_possibleTypes: string[] = ["FilmsConnection"];
export const isFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmsConnection"');
  return FilmsConnection_possibleTypes.includes(obj.__typename);
};

const PageInfo_possibleTypes: string[] = ["PageInfo"];
export const isPageInfo = (
  obj?: { __typename?: any } | null,
): obj is PageInfo => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPageInfo"');
  return PageInfo_possibleTypes.includes(obj.__typename);
};

const FilmsEdge_possibleTypes: string[] = ["FilmsEdge"];
export const isFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmsEdge"');
  return FilmsEdge_possibleTypes.includes(obj.__typename);
};

const Film_possibleTypes: string[] = ["Film"];
export const isFilm = (obj?: { __typename?: any } | null): obj is Film => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFilm"');
  return Film_possibleTypes.includes(obj.__typename);
};

const Node_possibleTypes: string[] = [
  "Film",
  "Species",
  "Planet",
  "Person",
  "Starship",
  "Vehicle",
];
export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isNode"');
  return Node_possibleTypes.includes(obj.__typename);
};

const FilmSpeciesConnection_possibleTypes: string[] = ["FilmSpeciesConnection"];
export const isFilmSpeciesConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmSpeciesConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmSpeciesConnection"');
  return FilmSpeciesConnection_possibleTypes.includes(obj.__typename);
};

const FilmSpeciesEdge_possibleTypes: string[] = ["FilmSpeciesEdge"];
export const isFilmSpeciesEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmSpeciesEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmSpeciesEdge"');
  return FilmSpeciesEdge_possibleTypes.includes(obj.__typename);
};

const Species_possibleTypes: string[] = ["Species"];
export const isSpecies = (
  obj?: { __typename?: any } | null,
): obj is Species => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSpecies"');
  return Species_possibleTypes.includes(obj.__typename);
};

const Planet_possibleTypes: string[] = ["Planet"];
export const isPlanet = (obj?: { __typename?: any } | null): obj is Planet => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPlanet"');
  return Planet_possibleTypes.includes(obj.__typename);
};

const PlanetResidentsConnection_possibleTypes: string[] = [
  "PlanetResidentsConnection",
];
export const isPlanetResidentsConnection = (
  obj?: { __typename?: any } | null,
): obj is PlanetResidentsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetResidentsConnection"');
  return PlanetResidentsConnection_possibleTypes.includes(obj.__typename);
};

const PlanetResidentsEdge_possibleTypes: string[] = ["PlanetResidentsEdge"];
export const isPlanetResidentsEdge = (
  obj?: { __typename?: any } | null,
): obj is PlanetResidentsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetResidentsEdge"');
  return PlanetResidentsEdge_possibleTypes.includes(obj.__typename);
};

const Person_possibleTypes: string[] = ["Person"];
export const isPerson = (obj?: { __typename?: any } | null): obj is Person => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPerson"');
  return Person_possibleTypes.includes(obj.__typename);
};

const PersonFilmsConnection_possibleTypes: string[] = ["PersonFilmsConnection"];
export const isPersonFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is PersonFilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonFilmsConnection"');
  return PersonFilmsConnection_possibleTypes.includes(obj.__typename);
};

const PersonFilmsEdge_possibleTypes: string[] = ["PersonFilmsEdge"];
export const isPersonFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is PersonFilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonFilmsEdge"');
  return PersonFilmsEdge_possibleTypes.includes(obj.__typename);
};

const PersonStarshipsConnection_possibleTypes: string[] = [
  "PersonStarshipsConnection",
];
export const isPersonStarshipsConnection = (
  obj?: { __typename?: any } | null,
): obj is PersonStarshipsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonStarshipsConnection"');
  return PersonStarshipsConnection_possibleTypes.includes(obj.__typename);
};

const PersonStarshipsEdge_possibleTypes: string[] = ["PersonStarshipsEdge"];
export const isPersonStarshipsEdge = (
  obj?: { __typename?: any } | null,
): obj is PersonStarshipsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonStarshipsEdge"');
  return PersonStarshipsEdge_possibleTypes.includes(obj.__typename);
};

const Starship_possibleTypes: string[] = ["Starship"];
export const isStarship = (
  obj?: { __typename?: any } | null,
): obj is Starship => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarship"');
  return Starship_possibleTypes.includes(obj.__typename);
};

const StarshipPilotsConnection_possibleTypes: string[] = [
  "StarshipPilotsConnection",
];
export const isStarshipPilotsConnection = (
  obj?: { __typename?: any } | null,
): obj is StarshipPilotsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipPilotsConnection"');
  return StarshipPilotsConnection_possibleTypes.includes(obj.__typename);
};

const StarshipPilotsEdge_possibleTypes: string[] = ["StarshipPilotsEdge"];
export const isStarshipPilotsEdge = (
  obj?: { __typename?: any } | null,
): obj is StarshipPilotsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipPilotsEdge"');
  return StarshipPilotsEdge_possibleTypes.includes(obj.__typename);
};

const StarshipFilmsConnection_possibleTypes: string[] = [
  "StarshipFilmsConnection",
];
export const isStarshipFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is StarshipFilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipFilmsConnection"');
  return StarshipFilmsConnection_possibleTypes.includes(obj.__typename);
};

const StarshipFilmsEdge_possibleTypes: string[] = ["StarshipFilmsEdge"];
export const isStarshipFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is StarshipFilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipFilmsEdge"');
  return StarshipFilmsEdge_possibleTypes.includes(obj.__typename);
};

const PersonVehiclesConnection_possibleTypes: string[] = [
  "PersonVehiclesConnection",
];
export const isPersonVehiclesConnection = (
  obj?: { __typename?: any } | null,
): obj is PersonVehiclesConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonVehiclesConnection"');
  return PersonVehiclesConnection_possibleTypes.includes(obj.__typename);
};

const PersonVehiclesEdge_possibleTypes: string[] = ["PersonVehiclesEdge"];
export const isPersonVehiclesEdge = (
  obj?: { __typename?: any } | null,
): obj is PersonVehiclesEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPersonVehiclesEdge"');
  return PersonVehiclesEdge_possibleTypes.includes(obj.__typename);
};

const Vehicle_possibleTypes: string[] = ["Vehicle"];
export const isVehicle = (
  obj?: { __typename?: any } | null,
): obj is Vehicle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isVehicle"');
  return Vehicle_possibleTypes.includes(obj.__typename);
};

const VehiclePilotsConnection_possibleTypes: string[] = [
  "VehiclePilotsConnection",
];
export const isVehiclePilotsConnection = (
  obj?: { __typename?: any } | null,
): obj is VehiclePilotsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehiclePilotsConnection"');
  return VehiclePilotsConnection_possibleTypes.includes(obj.__typename);
};

const VehiclePilotsEdge_possibleTypes: string[] = ["VehiclePilotsEdge"];
export const isVehiclePilotsEdge = (
  obj?: { __typename?: any } | null,
): obj is VehiclePilotsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehiclePilotsEdge"');
  return VehiclePilotsEdge_possibleTypes.includes(obj.__typename);
};

const VehicleFilmsConnection_possibleTypes: string[] = [
  "VehicleFilmsConnection",
];
export const isVehicleFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is VehicleFilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehicleFilmsConnection"');
  return VehicleFilmsConnection_possibleTypes.includes(obj.__typename);
};

const VehicleFilmsEdge_possibleTypes: string[] = ["VehicleFilmsEdge"];
export const isVehicleFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is VehicleFilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehicleFilmsEdge"');
  return VehicleFilmsEdge_possibleTypes.includes(obj.__typename);
};

const PlanetFilmsConnection_possibleTypes: string[] = ["PlanetFilmsConnection"];
export const isPlanetFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is PlanetFilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetFilmsConnection"');
  return PlanetFilmsConnection_possibleTypes.includes(obj.__typename);
};

const PlanetFilmsEdge_possibleTypes: string[] = ["PlanetFilmsEdge"];
export const isPlanetFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is PlanetFilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetFilmsEdge"');
  return PlanetFilmsEdge_possibleTypes.includes(obj.__typename);
};

const SpeciesPeopleConnection_possibleTypes: string[] = [
  "SpeciesPeopleConnection",
];
export const isSpeciesPeopleConnection = (
  obj?: { __typename?: any } | null,
): obj is SpeciesPeopleConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesPeopleConnection"');
  return SpeciesPeopleConnection_possibleTypes.includes(obj.__typename);
};

const SpeciesPeopleEdge_possibleTypes: string[] = ["SpeciesPeopleEdge"];
export const isSpeciesPeopleEdge = (
  obj?: { __typename?: any } | null,
): obj is SpeciesPeopleEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesPeopleEdge"');
  return SpeciesPeopleEdge_possibleTypes.includes(obj.__typename);
};

const SpeciesFilmsConnection_possibleTypes: string[] = [
  "SpeciesFilmsConnection",
];
export const isSpeciesFilmsConnection = (
  obj?: { __typename?: any } | null,
): obj is SpeciesFilmsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesFilmsConnection"');
  return SpeciesFilmsConnection_possibleTypes.includes(obj.__typename);
};

const SpeciesFilmsEdge_possibleTypes: string[] = ["SpeciesFilmsEdge"];
export const isSpeciesFilmsEdge = (
  obj?: { __typename?: any } | null,
): obj is SpeciesFilmsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesFilmsEdge"');
  return SpeciesFilmsEdge_possibleTypes.includes(obj.__typename);
};

const FilmStarshipsConnection_possibleTypes: string[] = [
  "FilmStarshipsConnection",
];
export const isFilmStarshipsConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmStarshipsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmStarshipsConnection"');
  return FilmStarshipsConnection_possibleTypes.includes(obj.__typename);
};

const FilmStarshipsEdge_possibleTypes: string[] = ["FilmStarshipsEdge"];
export const isFilmStarshipsEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmStarshipsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmStarshipsEdge"');
  return FilmStarshipsEdge_possibleTypes.includes(obj.__typename);
};

const FilmVehiclesConnection_possibleTypes: string[] = [
  "FilmVehiclesConnection",
];
export const isFilmVehiclesConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmVehiclesConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmVehiclesConnection"');
  return FilmVehiclesConnection_possibleTypes.includes(obj.__typename);
};

const FilmVehiclesEdge_possibleTypes: string[] = ["FilmVehiclesEdge"];
export const isFilmVehiclesEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmVehiclesEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmVehiclesEdge"');
  return FilmVehiclesEdge_possibleTypes.includes(obj.__typename);
};

const FilmCharactersConnection_possibleTypes: string[] = [
  "FilmCharactersConnection",
];
export const isFilmCharactersConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmCharactersConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmCharactersConnection"');
  return FilmCharactersConnection_possibleTypes.includes(obj.__typename);
};

const FilmCharactersEdge_possibleTypes: string[] = ["FilmCharactersEdge"];
export const isFilmCharactersEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmCharactersEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmCharactersEdge"');
  return FilmCharactersEdge_possibleTypes.includes(obj.__typename);
};

const FilmPlanetsConnection_possibleTypes: string[] = ["FilmPlanetsConnection"];
export const isFilmPlanetsConnection = (
  obj?: { __typename?: any } | null,
): obj is FilmPlanetsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmPlanetsConnection"');
  return FilmPlanetsConnection_possibleTypes.includes(obj.__typename);
};

const FilmPlanetsEdge_possibleTypes: string[] = ["FilmPlanetsEdge"];
export const isFilmPlanetsEdge = (
  obj?: { __typename?: any } | null,
): obj is FilmPlanetsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFilmPlanetsEdge"');
  return FilmPlanetsEdge_possibleTypes.includes(obj.__typename);
};

const PeopleConnection_possibleTypes: string[] = ["PeopleConnection"];
export const isPeopleConnection = (
  obj?: { __typename?: any } | null,
): obj is PeopleConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPeopleConnection"');
  return PeopleConnection_possibleTypes.includes(obj.__typename);
};

const PeopleEdge_possibleTypes: string[] = ["PeopleEdge"];
export const isPeopleEdge = (
  obj?: { __typename?: any } | null,
): obj is PeopleEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPeopleEdge"');
  return PeopleEdge_possibleTypes.includes(obj.__typename);
};

const PlanetsConnection_possibleTypes: string[] = ["PlanetsConnection"];
export const isPlanetsConnection = (
  obj?: { __typename?: any } | null,
): obj is PlanetsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetsConnection"');
  return PlanetsConnection_possibleTypes.includes(obj.__typename);
};

const PlanetsEdge_possibleTypes: string[] = ["PlanetsEdge"];
export const isPlanetsEdge = (
  obj?: { __typename?: any } | null,
): obj is PlanetsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlanetsEdge"');
  return PlanetsEdge_possibleTypes.includes(obj.__typename);
};

const SpeciesConnection_possibleTypes: string[] = ["SpeciesConnection"];
export const isSpeciesConnection = (
  obj?: { __typename?: any } | null,
): obj is SpeciesConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesConnection"');
  return SpeciesConnection_possibleTypes.includes(obj.__typename);
};

const SpeciesEdge_possibleTypes: string[] = ["SpeciesEdge"];
export const isSpeciesEdge = (
  obj?: { __typename?: any } | null,
): obj is SpeciesEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSpeciesEdge"');
  return SpeciesEdge_possibleTypes.includes(obj.__typename);
};

const StarshipsConnection_possibleTypes: string[] = ["StarshipsConnection"];
export const isStarshipsConnection = (
  obj?: { __typename?: any } | null,
): obj is StarshipsConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipsConnection"');
  return StarshipsConnection_possibleTypes.includes(obj.__typename);
};

const StarshipsEdge_possibleTypes: string[] = ["StarshipsEdge"];
export const isStarshipsEdge = (
  obj?: { __typename?: any } | null,
): obj is StarshipsEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStarshipsEdge"');
  return StarshipsEdge_possibleTypes.includes(obj.__typename);
};

const VehiclesConnection_possibleTypes: string[] = ["VehiclesConnection"];
export const isVehiclesConnection = (
  obj?: { __typename?: any } | null,
): obj is VehiclesConnection => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehiclesConnection"');
  return VehiclesConnection_possibleTypes.includes(obj.__typename);
};

const VehiclesEdge_possibleTypes: string[] = ["VehiclesEdge"];
export const isVehiclesEdge = (
  obj?: { __typename?: any } | null,
): obj is VehiclesEdge => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isVehiclesEdge"');
  return VehiclesEdge_possibleTypes.includes(obj.__typename);
};
