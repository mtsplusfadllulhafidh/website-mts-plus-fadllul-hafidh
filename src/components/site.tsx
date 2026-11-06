import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, GraduationCap, HeartHandshake, Menu, Star, Users, BookMarked, ArrowRight } from 'lucide-react';

const nav=[['Beranda','/'],['Profil Madrasah','/profil'],['Visi & Misi','/visi-misi'],['Program','/program'],['Berita','/berita'],['Galeri','/galeri'],['PPDB','/ppdb'],['Kontak','/kontak']];
export function Header(){return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e9eee9]">
      <div className="container flex h-[78px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mts.jpeg"
            alt="Logo MTs Plus Fadllul Hafidh"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <div>
            <div className="font-extrabold text-[#073f32] leading-tight">MTs PLUS</div>
            <div className="text-[11px] font-bold tracking-[.16em] text-[#9a7a39]">FADLLUL HAFIDH</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {nav.map(([n, h]) => (
            <Link key={h} href={h} className="text-[12px] font-semibold text-[#42534b] hover:text-[#a27d34]">
              {n}
            </Link>
          ))}
        </nav>

        <Link href="/ppdb" className="hidden md:inline-flex btn btn-gold">
          PENDAFTARAN <ArrowRight size={15} className="ml-2" />
        </Link>

        <details className="relative lg:hidden">
          <summary className="list-none cursor-pointer rounded-lg border p-2 text-[#073f32]">
            <Menu />
          </summary>
          <nav className="absolute right-0 top-12 grid w-56 gap-1 rounded-xl border bg-white p-3 shadow-xl">
            {nav.map(([n, h]) => (
              <Link key={h} href={h} className="rounded-md px-3 py-2 text-sm hover:bg-[#f2f6f2]">
                {n}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
export function Footer(){return <footer className="bg-[#052f26] py-14 text-white"><div className="container grid gap-10 md:grid-cols-3"><div><div className="text-xl font-extrabold">MTs Plus Fadllul Hafidh</div><p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Madrasah yang berkomitmen membentuk generasi berilmu, berakhlakul karimah, dan berlandaskan nilai-nilai Islam.</p></div><div><b className="text-[#d4b36d]">Jelajahi</b><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">{nav.slice(1).map(([n,h])=><Link href={h} key={h}>{n}</Link>)}</div></div><div><b className="text-[#d4b36d]">Hubungi Kami</b><p className="mt-4 text-sm leading-7 text-white/70">Alamat, nomor WhatsApp, dan email resmi madrasah<br/>Silakan lengkapi melalui dashboard admin.</p></div></div><div className="container mt-12 border-t border-white/15 pt-6 text-xs text-white/50">© 2026 MTs Plus Fadllul Hafidh. All Rights Reserved.</div></footer>}
export function Shell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
export function SectionHeading({tag,title,desc}:{tag:string,title:string,desc?:string}){return <div className="mb-10 max-w-2xl"><div className="eyebrow">{tag}</div><h2 className="section-title">{title}</h2>{desc&&<p className="muted">{desc}</p>}</div>}
export const programs=[['Tahfidz Al-Qur’an','Pembinaan hafalan Al-Qur’an dengan pendampingan dan pembiasaan murojaah.',BookMarked],['Pembelajaran Keislaman','Penguatan ilmu agama dan praktik ibadah dalam kehidupan sehari-hari.',BookOpen],['Pembiasaan Ibadah','Membangun kedisiplinan ibadah dan karakter religius peserta didik.',Star],['Akhlakul Karimah','Menumbuhkan adab, tanggung jawab, dan kepedulian terhadap sesama.',HeartHandshake],['Pengembangan Akademik','Pembelajaran aktif untuk mengembangkan potensi dan prestasi siswa.',GraduationCap],['Ekstrakurikuler','Ruang pengembangan bakat, minat, kreativitas, dan kerja sama.',Users]] as const;