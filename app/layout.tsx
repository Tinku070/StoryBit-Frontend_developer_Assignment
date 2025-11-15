import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';


export const metadata = { title: 'Streaming Dashboard', description: 'A small streaming dashboard' };


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-[#05060a] text-white min-h-screen">
<Header />
<main className="pt-20 max-w-7xl mx-auto px-4">{children}</main>
</body>
</html>
);
}