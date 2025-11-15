'use client';
import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '../types/movie';


export default function MovieCard({ movie }: { movie: Movie }) {
return (
<div className="min-w-[150px] shrink-0">
<Link href={`/movie/${movie.id}`} className="block rounded-md overflow-hidden hover:opacity-90">
{movie.poster_path ? (
<Image src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title ?? movie.name} width={220} height={330} />
) : (
<div className="w-[220px] h-[330px] bg-gray-800" />
)}
</Link>
<h4 className="mt-2 text-sm max-w-[220px] truncate">{movie.title ?? movie.name}</h4>
</div>
);
}