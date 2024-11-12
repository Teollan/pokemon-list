const API_BASE = "https://pokeapi.co/api/v2/";

async function request<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const url = API_BASE + endpoint;
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Failed request to ${url}`);
  }

  return response.json();
}

function get<T>(endpoint: string): Promise<T> {
  return request(endpoint, {
    method: "GET",
  });
}

export const client = {
  get,
};
