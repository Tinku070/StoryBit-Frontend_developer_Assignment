import MovieRow from '../../components/MovieRow';
import { fetchTopRated } from '../../lib/tmdb';


export default async function MoviesPage() {
const res = await fetchTopRated().catch(() => ({ results: [] }));
const movies = res.results ?? [];
return (
<div className="py-6">
<h1 className="text-2xl font-bold mb-4">Top Rated Movies</h1>
<MovieRow movies={movies} categoryTitle="Top Rated" />
</div>
);
}