// lib/tmdb.ts
const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

async function safeFetch(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`TMDB fetch failed (${res.status}): ${text}`);
  }
  return res.json();
}

// MOVIES
export async function fetchPopular() {
  const url = `${BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchTopRated() {
  const url = `${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchNowPlaying() {
  const url = `${BASE}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchMovieById(id: string) {
  const url = `${BASE}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  return safeFetch(url);
}

// TV SHOWS (NEW)
export async function fetchTVPopular() {
  const url = `${BASE}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchTVTopRated() {
  const url = `${BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}
