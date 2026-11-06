import {
  BookOpen,
  BookMarked,
  Moon,
  Music2,
  Headphones,
  GraduationCap,
  Star,
  ScrollText,
} from 'lucide-react';

import { Shell } from '@/components/site';

const unggulan = [
  {
    nomor: '01',
    judul: "Tahfidzul Qur'an",
    deskripsi:
      "Program pembinaan hafalan Al-Qur'an untuk menumbuhkan kecintaan terhadap Al-Qur'an serta membentuk generasi Qur'ani yang berilmu dan berakhlak mulia.",
    Icon: BookMarked,
  },
  {
    nomor: '02',
    judul: 'Kitab Kuning (Turats)',
    deskripsi:
      'Program pembelajaran khazanah keilmuan Islam melalui kitab-kitab turats sebagai upaya memperkuat pemahaman agama dan tradisi keilmuan pesantren.',
    Icon: BookOpen,
  },
];

const pembiasaan = [
  {
    judul: 'Sholat Dhuha',
    deskripsi:
      'Pembiasaan ibadah untuk menanamkan kedisiplinan dan meningkatkan kecintaan peserta didik terhadap ibadah.',
    Icon: Moon,
  },
  {
    judul: 'Nadloman',
    deskripsi:
      'Pembiasaan melantunkan nadzom sebagai bagian dari tradisi pembelajaran dan penguatan hafalan.',
    Icon: Music2,
  },
  {
    judul: "Murottal Al-Qur'an",
    deskripsi:
      'Pembiasaan membaca dan menyimak lantunan ayat suci Al-Qur’an untuk mendekatkan peserta didik dengan Al-Qur’an.',
    Icon: Headphones,
  },
];

const kitab = [
  'Safinatunnaja',
  'Jurumiyah',
  'Nadzom Mandlumah',
  'Taysirul Kholaq',
  'Hidayatus Shibyan',
  'Khulashoh Nurul Yaqin',
];

export default function Program() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#073f32] py-20 text-white">
        <div className="container relative">
          <div className="eyebrow">PENDIDIKAN DAN PEMBINAAN</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Program Madrasah
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            Membentuk generasi yang berilmu, berakhlakul karimah,
            berprestasi, melek teknologi, serta tetap memiliki
            jiwa santri.
          </p>
          <div className="mt-8 h-1 w-20 rounded-full bg-[#d6b66e]" />
        </div>
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#d6b66e]/20" />
        <div className="absolute -right-5 -top-9 h-52 w-52 rounded-full border border-[#d6b66e]/20" />
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="section">
        <div className="container">
          <div className="mb-10">
            <div className="eyebrow">PROGRAM UNGGULAN</div>
            <h2 className="section-title">
              Dua Pilar Keunggulan Madrasah
            </h2>
            <p className="muted">
              Fokus pendidikan MTs Plus Fadllul Hafidh dalam
              mengembangkan kemampuan Al-Qur'an dan keilmuan Islam.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {unggulan.map(({ nomor, judul, deskripsi, Icon }) => (
              <div
                key={nomor}
                className="group relative overflow-hidden rounded-2xl bg-[#073f32] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#d6b66e]">
                      <Icon size={34} />
                    </div>
                    <span className="text-5xl font-black text-white/15">
                      {nomor}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold text-[#e6c77e]">
                    {judul}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-white/75">
                    {deskripsi}
                  </p>
                  <div className="mt-7 h-1 w-14 rounded-full bg-[#d6b66e]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM PEMBIASAAN */}
      <section className="bg-[#f6f8f4] py-20">
        <div className="container">
          <div className="mb-10">
            <div className="eyebrow">PROGRAM PEMBIASAAN</div>
            <h2 className="section-title">
              Membentuk Karakter Islami
            </h2>
            <p className="muted">
              Kegiatan pembiasaan untuk menanamkan nilai-nilai
              keislaman dalam kehidupan sehari-hari peserta didik.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pembiasaan.map(({ judul, deskripsi, Icon }, index) => (
              <div
                key={judul}
                className="rounded-2xl border border-[#e6ece5] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf4ef] text-[#0b5945]">
                  <Icon size={29} />
                </div>
                <div className="mt-6 text-xs font-bold tracking-widest text-[#b18c48]">
                  KEGIATAN 0{index + 1}
                </div>
                <h3 className="mt-2 text-xl font-extrabold text-[#073f32]">
                  {judul}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KITAB UNGGULAN */}
      <section className="section">
        <div className="container">
          <div className="mb-10 text-center">
            <div className="eyebrow">KHazanah KEILMUAN ISLAM</div>
            <h2 className="section-title">
              Kitab-Kitab Unggulan
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500">
              Pembelajaran kitab-kitab turats sebagai bagian dari
              penguatan tradisi keilmuan Islam di MTs Plus Fadllul Hafidh.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitab.map((nama, index) => (
              <div
                key={nama}
                className="group flex items-center gap-5 rounded-xl border border-[#e9eee9] bg-white p-6 shadow-sm transition duration-300 hover:border-[#c7a45a] hover:shadow-lg"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#073f32] text-[#d6b66e]">
                  <ScrollText size={27} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#b18c48]">
                    KITAB 0{index + 1}
                  </div>
                  <h3 className="mt-1 font-bold text-[#073f32]">
                    {nama}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Pembelajaran Kitab Turats
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="bg-[#073f32] py-16 text-center text-white">
        <div className="container">
          <Star className="mx-auto text-[#d6b66e]" size={34} />
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight">
            Berilmu, Berakhlak, dan Tetap Berjiwa Santri
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Melalui program unggulan dan pembiasaan, MTs Plus
            Fadllul Hafidh berikhtiar membentuk generasi yang
            unggul dalam ilmu dan luhur dalam akhlak.
          </p>
        </div>
      </section>
    </Shell>
  );
}