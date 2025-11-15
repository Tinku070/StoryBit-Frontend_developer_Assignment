// app/page.tsx

import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import { fetchPopular, fetchTopRated, fetchNowPlaying } from "../lib/tmdb";

export default async function Page() {
  const popularRes = await fetchPopular();
  const nowPlayingRes = await fetchNowPlaying();
  const topRatedRes = await fetchTopRated();

  const popular = popularRes.results || [];
  const nowPlaying = nowPlayingRes.results || [];
  const topRated = topRatedRes.results || [];

  const heroMovie = popular[0] || null;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {heroMovie && <HeroBanner movie={heroMovie} />}

      <section className="space-y-8 mt-8 pb-8">
        <MovieRow movies={popular} categoryTitle="Popular" />
        <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
        <MovieRow movies={topRated} categoryTitle="Top Rated" />
      </section>
    </div>
  );
}
