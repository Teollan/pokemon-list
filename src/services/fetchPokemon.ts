import { Pokemon } from "../util/types/Pokemon";

export default async function fetchPokemon(url: string): Promise<Pokemon> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed request to ${url}`);
  }

  return response.json();
}
