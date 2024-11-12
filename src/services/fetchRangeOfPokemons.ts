import { client } from "../util/client/client";
import { PokemonPage } from "../util/types/Pokemon";

export default function fetchRangeOfPokemons(offset: number, limit: number) {
  return client.get<PokemonPage>(`pokemon?offset=${offset}&limit=${limit}`);
}
