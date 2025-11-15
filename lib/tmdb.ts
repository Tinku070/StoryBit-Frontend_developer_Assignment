// lib/tmdb.ts

const BASE = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  console.error("❌ TMDB_API_KEY missing in environment variables");
}

async function safeFetch(url: string) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("❌ TMDB Error:", res.status, await res.text());
      return { results: [] };
    }

    return res.json();
  } catch (error) {
    console.error("❌ Fetch error:", error);
    return { results: [] };
  }
}

export async function fetchPopular() {
  return safeFetch(`${BASE}/movie/popular?api_key=${API_KEY}&language=en-US`);
}

export async function fetchTopRated() {
  return safeFetch(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`);
}

export async function fetchNowPlaying() {
  return safeFetch(`${BASE}/movie/now_playing?api_key=${API_KEY}&language=en-US`);
}

export async function fetchMovieById(id: string) {
  return safeFetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=en-US`);
}
