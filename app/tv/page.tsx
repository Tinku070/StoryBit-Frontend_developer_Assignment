// app/tv/page.tsx
import MovieRow from '../../components/MovieRow';
import { fetchTVPopular, fetchTVTopRated } from '../../lib/tmdb';

export default async function TVPage() {
  const [popular, topRated] = await Promise.all([
    fetchTVPopular(),
    fetchTVTopRated(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">TV Shows</h1>

      <MovieRow movies={popular.results} categoryTitle="Popular TV Shows" />
      <MovieRow movies={topRated.results} categoryTitle="Top Rated TV Shows" />
    </div>
  );
}
