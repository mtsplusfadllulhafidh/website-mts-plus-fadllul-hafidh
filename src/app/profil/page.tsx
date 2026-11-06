import {Shell,SectionHeading} from '@/components/site';
const identitas = [
  ['Nama Madrasah', 'MTs Plus Fadllul Hafidh'],
  ['Pendiri', 'K. Ahmad Kafidhin, M.Pd.'],
  ['Naungan', 'Yayasan Fadllul Hafidh Boyolali'],
  ['Tahun Berdiri', '2026'],
  ['Desa', 'Sawahan'],
  ['Kecamatan', 'Ngemplak'],
  ['Kabupaten', 'Boyolali'],
  ['Provinsi', 'Jawa Tengah'],
];

export default function Profil() {
  return (
    <Shell>
      <section className="bg-[#073f32] py-20 text-white">
        <div className="container">
          <div className="eyebrow">Tentang Kami</div>
          <h1 className="mt-3 text-5xl font-black">
            Profil Madrasah
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-white/75">
            Mengenal lebih dekat sejarah, identitas, dan perjalanan
            MTs Plus Fadllul Hafidh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src="/gedung-madrasah.jpeg"
                alt="Gedung MTs Plus Fadllul Hafidh"
                className="h-[350px] w-full rounded-2xl object-cover shadow-lg"
              />
              <p className="mt-3 text-center text-sm text-gray-500">
                Gedung MTs Plus Fadllul Hafidh
              </p>
            </div>

            <div>
              <div className="eyebrow">Sejarah Madrasah</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#073f32]">
                Berawal dari Kepedulian terhadap Pendidikan Generasi Muda
              </h2>

              <p className="mt-5 text-justify leading-8 text-gray-600">
                Madrasah Tsanawiyah (MTs) Plus Fadllul Hafidh
                didirikan oleh K. Ahmad Kafidhin, M.Pd. pada
                tahun 2026 di bawah naungan Yayasan Fadllul
                Hafidh Boyolali.
              </p>

              <p className="mt-4 text-justify leading-8 text-gray-600">
                Berdirinya madrasah ini dilatarbelakangi oleh
                keinginan dan kepedulian Pengasuh Pondok
                Pesantren Fadllul Hafidh terhadap pentingnya
                pendidikan agama Islam dan pendidikan umum,
                dengan tetap memperhatikan perkembangan
                teknologi bagi generasi muda.
              </p>

              <p className="mt-4 text-justify leading-8 text-gray-600">
                MTs Plus Fadllul Hafidh hadir dengan tujuan
                membentuk peserta didik yang berilmu,
                berakhlak, berprestasi, melek teknologi,
                serta tetap menanamkan jiwa santri.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8f4] py-20">
        <div className="container">
          <SectionHeading
            tag="Identitas Lembaga"
            title="Mengenal MTs Plus Fadllul Hafidh"
            desc="Informasi dan identitas kelembagaan madrasah."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {identitas.map(([label, value]) => (
              <div className="card" key={label}>
                <div className="text-xs font-bold uppercase tracking-wider text-[#a27d34]">
                  {label}
                </div>
                <div className="mt-3 font-bold leading-7 text-[#073f32]">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#073f32] p-8 text-white">
            <div className="text-sm font-bold tracking-widest text-[#d6b66e]">
              ALAMAT MADRASAH
            </div>
            <h3 className="mt-3 text-xl font-bold">
              MTs Plus Fadllul Hafidh
            </h3>
            <p className="mt-3 leading-8 text-white/80">
              Dusun Sawahan Kidul, RT 02/RW 02, Desa Sawahan,
              Kecamatan Ngemplak, Kabupaten Boyolali,
              Jawa Tengah.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}