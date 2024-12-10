// tmdbService.ts
export type Params = { [key: string]: string | number | boolean };


const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


export const fetchMovies = async (endpoint: string, params: Params = {}) => {
  try {
    if (!API_URL) {
      throw new Error('API_URL is not defined');
    }

    if (!API_KEY) {
      throw new Error('API_KEY is not defined');
    }

    const url = new URL(`${API_URL}/${endpoint}`);
    url.searchParams.append('api_key', API_KEY);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch movies: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};

