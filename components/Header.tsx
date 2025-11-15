'use client';
import Link from 'next/link';


export default function Header() {
return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-6">
<Link href="/" className="text-xl font-bold">Stream<span className="text-red-500">Bit</span></Link>
<nav className="hidden md:flex gap-4 text-sm text-gray-200">
<Link href="/">Home</Link>
<Link href="/tv">TV Shows</Link>
<Link href="/movies">Movies</Link>
<Link href="/my-list">My List</Link>
</nav>
</div>
</div>
</header>
);
}