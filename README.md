# MTs Plus Fadllul Hafidh — Website Starter

Starter website Next.js + Tailwind CSS + Supabase. Identitas resmi yang belum diberikan sengaja memakai placeholder.

## Menjalankan secara lokal
1. Install Node.js 20+.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env.local`.
4. Buat project Supabase, lalu isi URL dan anon key.
5. Jalankan isi `supabase/schema.sql` melalui Supabase SQL Editor.
6. Buat akun admin melalui Supabase Authentication > Users (email/password).
7. Jalankan `npm run dev`, lalu buka http://localhost:3000.

## Fitur yang sudah disiapkan
- Halaman beranda, profil, visi-misi, program, berita, detail berita, galeri, PPDB, kontak.
- Header sticky dan navigasi mobile.
- Form PPDB dan pesan pengunjung yang mengirim ke tabel Supabase.
- Login/logout admin dengan Supabase Auth dan middleware proteksi halaman `/admin`.
- Skema database untuk berita, profil, guru, galeri, PPDB, dan pesan.

## Penting sebelum produksi
- Dashboard admin saat ini adalah kerangka panel; modul CRUD berita/galeri/guru/statistik dan manajemen pendaftar/pesan belum diimplementasikan.
- Tambahkan tabel profil admin/role dan policy RLS khusus admin. Jangan mengandalkan sekadar menyembunyikan tombol.
- Buat bucket Storage `madrasah-media` dan policy upload khusus admin.
- Tambahkan CAPTCHA/rate limiting dan validasi server-side untuk formulir publik.
- Ganti foto Unsplash dengan dokumentasi madrasah yang memiliki izin penggunaan.
- Lengkapi nama kepala madrasah, alamat, kontak, NPSN/NSM, visi-misi, jadwal dan persyaratan PPDB. Jangan tayangkan placeholder sebagai data resmi.
- Atur domain, metadata sosial, sitemap, robots, analytics sesuai kebijakan privasi, serta backup database.
- Untuk produksi, tambahkan audit log dan proses penghapusan/retensi data pendaftar sesuai kebijakan madrasah.

## Catatan keamanan
Supabase anon key memang digunakan pada browser; keamanan data harus ditegakkan oleh Row Level Security. Jangan pernah memasukkan `service_role` key ke variabel `NEXT_PUBLIC_*`.
