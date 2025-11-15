// lib/tmdb.ts
const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

// Safe fetch wrapper
async function safeFetch(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error("TMDB Error:", res.status, text);
    throw new Error(`TMDB fetch failed (${res.status}): ${text}`);
  }
  return res.json();
}

/* -----------------------------
   MOVIES ENDPOINTS
----------------------------- */

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

/* -----------------------------
   TV SHOWS ENDPOINTS
----------------------------- */

export async function fetchTVPopular() {
  const url = `${BASE}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchTVTopRated() {
  const url = `${BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  return safeFetch(url);
}

export async function fetchTVShowById(id: string) {
  const url = `${BASE}/tv/${id}?api_key=${API_KEY}&language=en-US`;
  return safeFetch(url);
}
