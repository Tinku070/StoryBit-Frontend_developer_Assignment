// app/tv/page.tsx
import MovieRow from '../../components/MovieRow';
import { fetchTVPopular } from '../../lib/tmdb';

export default async function TVPage() {
  const data = await fetchTVPopular();
  const shows = data?.results ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Popular TV Shows</h1>
      <MovieRow movies={shows} categoryTitle="Popular TV Shows" />
    </div>
  );
}
