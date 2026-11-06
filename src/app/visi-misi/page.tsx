import {Shell,SectionHeading} from '@/components/site';
const misi = [
  'Menumbuhkan penghayatan dan pengamalan ajaran agama Islam berdasarkan prinsip Ahlussunnah Wal Jama’ah An-Nahdliyah.',
  'Menyelenggarakan pendidikan terpadu berbasis nilai-nilai keagamaan dan ilmu pengetahuan umum secara seimbang dan berkualitas.',
  'Menyelenggarakan pembelajaran yang interaktif, inspiratif, inovatif, dan menyenangkan untuk menumbuhkan karakter siswa yang berakhlakul karimah, disiplin, berprestasi, kritis, serta bertanggung jawab.',
  'Mengembangkan dan mengoptimalkan potensi, bakat, serta minat siswa secara holistik melalui pembelajaran berbasis teknologi serta kegiatan intra, kokurikuler, dan ekstrakurikuler.',
  'Menghidupkan budaya literasi, numerasi, berpikir kritis, dan penguasaan teknologi.',
  'Menciptakan lingkungan madrasah yang aman, sehat, bersih, indah, nyaman, dan bernuansa Islami.',
  'Menumbuhkan jiwa kewirausahaan dan kemandirian melalui pembekalan keterampilan dan pelatihan berkelanjutan.',
  'Membangun budaya dan iklim kerja yang kondusif melalui kolaborasi aktif seluruh pemangku kepentingan untuk menyukseskan tugas pokok serta fungsi madrasah.',
  'Meningkatkan kompetensi guru dan tenaga kependidikan secara berkelanjutan melalui program pelatihan intensif dan berbasis mutu.',
];

export default function VisiMisi() {
  return (
    <Shell>
      <section className="bg-[#073f32] py-20 text-white">
        <div className="container">
          <div className="eyebrow">ARAH PENDIDIKAN</div>
          <h1 className="mt-3 text-5xl font-black">Visi dan Misi</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Landasan dan arah penyelenggaraan pendidikan MTs Plus Fadllul Hafidh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-[#073f32] px-8 py-12 text-white md:px-14 md:py-16">
            <div className="eyebrow">VISI MADRASAH</div>
            <h2 className="mt-5 max-w-4xl text-2xl font-extrabold leading-relaxed md:text-4xl">
              Menjadi madrasah unggulan yang mencetak generasi cerdas secara
              intelektual dan spiritual, inovatif, berakhlakul karimah,
              serta berdaya saing global.
            </h2>
            <div className="mt-8 h-1 w-20 rounded-full bg-[#d6b66e]" />
          </div>

          <div className="mt-16">
            <div className="eyebrow">MISI MADRASAH</div>
            <h2 className="section-title">Langkah Nyata Menuju Madrasah Unggulan</h2>
            <p className="muted">
              Sembilan misi sebagai pedoman dalam mewujudkan visi MTs Plus
              Fadllul Hafidh.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {misi.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-xl border border-[#e8eee8] bg-white p-6 shadow-sm"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#073f32] font-bold text-[#d6b66e]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm leading-7 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}