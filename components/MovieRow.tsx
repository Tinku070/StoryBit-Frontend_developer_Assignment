"use client";

import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types/movie";

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">{categoryTitle}</h3>

      <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide snap-x snap-mandatory">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[150px] shrink-0 snap-start">
            <Link
              href={`/movie/${movie.id}`}
              className="block rounded-lg overflow-hidden hover:opacity-90"
            >
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.title ?? "Poster"}
                  width={220}
                  height={330}
                />
              ) : (
                <div className="w-[220px] h-[330px] bg-gray-700" />
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
