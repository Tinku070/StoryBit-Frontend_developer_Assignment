import Image from 'next/image';
import type { Movie } from '../types/movie';
import Link from 'next/link';


export default function HeroBanner({ movie }: { movie: Movie }) {
const backdrop = movie.backdrop_path ?? movie.poster_path ?? null;
return (
<section className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
{backdrop && (
<Image src={`https://image.tmdb.org/t/p/original${backdrop}`} alt={movie.title ?? movie.name} fill priority style={{ objectFit: 'cover' }} />
)}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
<div className="absolute bottom-6 left-6 max-w-2xl">
<h2 className="text-2xl md:text-4xl font-bold">{movie.title ?? movie.name}</h2>
<p className="mt-2 text-sm md:text-base text-gray-200 line-clamp-3">{movie.overview}</p>
<div className="mt-4 flex gap-3">
<Link href={`/movie/${movie.id}`} className="px-4 py-2 bg-white text-black rounded-md font-semibold">Watch</Link>
<button className="px-3 py-2 border border-gray-500 rounded-md">+ My List</button>
</div>
</div>
</section>
);
}