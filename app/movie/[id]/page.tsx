// app/movie/[id]/page.tsx

import { fetchMovieById } from "../../../lib/tmdb";
import Image from "next/image";
import type { Movie } from "../../../types/movie";

// IMPORTANT: Next.js 14+ passes params as a Promise in RSC
export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let data: Movie | null = null;

  try {
    data = await fetchMovieById(id);
  } catch (error) {
    console.error("⚠️ TMDB Movie Fetch Error:", error);
  }

  // Handle invalid or missing data
  if (!data || (data as any).success === false) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold">Movie Not Found</h2>
        <p className="text-gray-300 mt-2">
          The requested movie does not exist or cannot be loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Poster */}
        <div className="relative w-full h-80 md:h-[500px]">
          {data.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title ?? "Poster"}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="bg-gray-700 w-full h-full" />
          )}
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">
            {data.title ?? data.name}
          </h1>

          <p className="text-gray-300 mb-4">{data.release_date}</p>

          <p className="text-gray-200 leading-relaxed mb-6">{data.overview}</p>

          <div className="text-gray-300 text-sm space-y-2">
            <p>
              <strong>Rating:</strong> {data.vote_average} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
