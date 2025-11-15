// app/movie/[id]/page.tsx
import { fetchMovieById } from '../../../lib/tmdb';
import Image from 'next/image';
import type { Movie } from '../../../types/movie';

interface Props {
  params: Promise<{ id: string }>;   // 👈 FIX: params is a Promise
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params;       // 👈 FIX: We must await it

  let data: Movie | null = null;

  try {
    data = await fetchMovieById(id);
  } catch (err) {
    console.error('❌ TMDB Error:', err);
  }

  if (!data || data.success === false) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-300">Movie not found or invalid ID.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative w-full h-64 md:h-96">
          {data.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title ?? 'Poster'}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-700" />
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-sm text-gray-300 mb-4">{data.release_date}</p>
          <p className="text-gray-200 leading-relaxed mb-4">{data.overview}</p>

          <div className="text-sm text-gray-300">
            <strong>Rating:</strong> {data.vote_average ?? 'N/A'} / 10
          </div>
        </div>
      </div>
    </div>
  );
}
