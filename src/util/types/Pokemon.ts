export type PokemonShortData = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export type PokemonPage = {
  count: number;
  next: string;
  prev: string;
  results: PokemonShortData[];
};
