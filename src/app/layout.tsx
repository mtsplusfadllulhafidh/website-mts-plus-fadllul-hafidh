import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'MTs Plus Fadllul Hafidh | Madrasah Unggul Berkarakter Islami', description: 'Website resmi MTs Plus Fadllul Hafidh. Informasi profil, program pendidikan, kegiatan, dan PPDB.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }