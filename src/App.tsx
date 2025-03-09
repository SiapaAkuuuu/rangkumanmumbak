import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Header */}
      <header className="bg-rose-500 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Document Viewer</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white shadow-lg rounded-lg border border-rose-100">
            {/* Document Header */}
            <div className="px-6 py-4 border-b border-rose-100 bg-rose-50">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-rose-500" />
                <h2 className="ml-2 text-xl font-semibold text-rose-900">Document Contents</h2>
              </div>
            </div>

            {/* Document Content */}
            <div className="px-6 py-4">
              <div className="space-y-6">
                {/* Navigation */}
                <nav className="flex items-center text-sm text-rose-400">
                  <span>Documents</span>
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <span className="text-rose-600">Current Document</span>
                </nav>

                {/* Content Sections */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4 text-rose-800">Pengertian Gangguan Kepribadian</h3>
                  <p className="text-rose-700 mb-4">
                  Gangguan kepribadian adalah pola pengalaman batin dan perilaku yang menetap,
menyimpang secara signifikan dari ekspektasi budaya individu, bersifat kaku, muncul sejak
remaja atau awal dewasa, dan menyebabkan gangguan sosial atau pekerjaan serta
penderitaan individu.
<br /> <br />Gangguan ini dikategorikan dalam DSM-5, yang juga mengusulkan model alternatif untuk
diagnosis dan konseptualisasi gangguan kepribadian.

                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-rose-800">Klasifikasi Gangguan Kepribadian</h3>
                  <p className="text-rose-700 mb-4">
                  Gangguan kepribadian dalam DSM-5 dikelompokkan ke dalam tiga klaster berdasarkan
karakteristik utama mereka.

                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-rose-800">Klaster A: Eksentrik dan Aneh</h3>
                  <p className="text-rose-700 mb-4">
                  Gangguan dalam klaster ini ditandai dengan perilaku yang aneh dan cenderung menarik
diri dari interaksi sosial.

                  </p>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-3 text-rose-800">1. Paranoid Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Selalu curiga terhadap orang lain dan menginterpretasikan motif orang lain
                      sebagai jahat.</li>
                      <li>Sulit mempercayai orang lain, bahkan teman dan keluarga.</li>
                      <li>Sering menyimpan dendam dan mudah merasa dihina atau diserang.</li>
                      <li>Bisa menunjukkan kecemburuan berlebihan terhadap pasangan.</li>
                    </ul>
                    <h4 className="text-lg font-medium mb-3 text-rose-800">2. Schizoid Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Menjauh dari hubungan sosial dan tidak tertarik menjalin kedekatan
dengan orang lain, termasuk keluarga.
</li>
                      <li>Kurang ekspresif dalam menunjukkan emosi.</li>
                      <li>Cenderung lebih suka aktivitas soliter dan jarang menikmati kegiatan sosial.</li>
                      <li>Tidak terganggu oleh kritik atau pujian dari orang lain.</li>
                    </ul>
                    <h4 className="text-lg font-medium mb-3 text-rose-800">3. Schizotypal Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Kesulitan dalam membangun hubungan dekat karena merasa tidak nyaman.</li>
                      <li>Memiliki keyakinan atau pemikiran aneh, seperti percaya pada kekuatan
                      supernatural atau membaca pikiran orang lain.</li>
                      <li>Cara berbicara yang aneh, penuh metafora atau tidak jelas.                      </li>
                      <li>Perilaku dan penampilan yang eksentrik atau tidak biasa.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-4 text-rose-800">Klaster B: Dramatis, Emosional, dan Impulsif </h3>
                  <p className="text-rose-700 mb-4">
                  Gangguan dalam klaster ini ditandai dengan ekspresi emosi yang berlebihan, dramatis, dan seringkali impulsif.
                  </p>
                  <h4 className="text-lg font-medium mb-3 text-rose-800">1. Antisocial Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Mengabaikan hak orang lain dan tidak merasa bersalah atas tindakannya.</li>
                      <li>Sering melakukan tindakan kriminal, menipu, dan manipulatif.</li>
                      <li>Tidak bertanggung jawab dalam pekerjaan dan hubungan sosial.                      </li>
                      <li>Impulsif, agresif, dan tidak peduli terhadap keselamatan diri sendiri atau
                      orang lain.
                      </li>
                    </ul>
                    <h4 className="text-lg font-medium mb-3 text-rose-800">2. Borderline Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Emosi tidak stabil, sering berpindah dari perasaan sangat menyukai
                      seseorang ke kebencian yang mendalam.</li>
                      <li>Takut ditinggalkan, bahkan jika itu hanya dugaan</li>
                      <li>Impulsif dalam berbagai aspek kehidupan (misalnya, pengeluaran uang, seks, penggunaan zat, makan berlebihan).</li>
                      <li>Memiliki kebiasaan menyakiti diri sendiri atau memiliki pikiran untuk bunuh
                      diri.</li>
                      <li>Merasa kosong secara emosional dan sering mengalami perubahan suasana
                      hati yang ekstrem.</li>
                      </ul>
                      <h4 className="text-lg font-medium mb-3 text-rose-800">3. Histrionic Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Mencari perhatian secara berlebihan dan ingin menjadi pusat perhatian.</li>
                      <li>Menggunakan penampilan fisik dan perilaku menggoda untuk menarik
                      perhatian.</li>
                      <li>Ekspresi emosi yang berlebihan dan cenderung dramatis.</li>
                      <li>Mudah terpengaruh oleh orang lain atau keadaan sekitar</li>
                      </ul>
                      <h4 className="text-lg font-medium mb-3 text-rose-800">4. Narcissistic Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Merasa dirinya lebih hebat dari orang lain dan memerlukan kekaguman dari
                      orang lain.</li>
                      <li>Kurang empati terhadap perasaan dan kebutuhan orang lain.</li>
                      <li>Sering merasa iri pada orang lain atau merasa orang lain iri padanya.</li>
                      <li>Eksploitasi orang lain demi keuntungan pribadi.</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-4 text-rose-800">Klaster C: Cemas dan Takut </h3>
                  <p className="text-rose-700 mb-4">
                  Gangguan dalam klaster ini melibatkan ketakutan yang berlebihan, kecemasan sosial, dan kebutuhan akan keteraturan yang tinggi.
                  </p>
                  <h4 className="text-lg font-medium mb-3 text-rose-800">1. Avoidant Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Sangat sensitif terhadap kritik dan takut ditolak.</li>
                      <li>Menghindari aktivitas sosial karena merasa tidak cukup baik.</li>
                      <li>Cenderung menarik diri dari hubungan yang belum dekat karena takut
                      dievaluasi negatif.</li>
                      <li>Kurang percaya diri dalam situasi sosial.</li>
                    </ul>
                    <h4 className="text-lg font-medium mb-3 text-rose-800">2. Dependent Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Sangat bergantung pada orang lain untuk membuat keputusan dan
                      menjalani kehidupan sehari-hari.</li>
                      <li>Sulit mengekspresikan ketidaksetujuan karena takut ditinggalkan atau
                      kehilangan dukungan.</li>
                      <li>Menghindari tanggung jawab dan lebih suka bergantung pada orang lain.</li>
                      <li>Cenderung merasa tidak mampu hidup sendiri dan takut ditinggalkan.</li>
                      </ul>
                      <h4 className="text-lg font-medium mb-3 text-rose-800">3. Obsessive-Compulsive Personality Disorder (OCPD)</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Terlalu perfeksionis dan kaku dalam aturan serta standar moral.</li>
                      <li>Kesulitan menyelesaikan tugas karena terobsesi dengan detail kecil.</li>
                      <li>Terlalu fokus pada pekerjaan dan produktivitas, sehingga mengabaikan hubungan
                      sosial.</li>
                      <li>Sulit membuang barang meskipun tidak diperlukan lagi.
                      </li>
                      </ul>
                      <h4 className="text-lg font-medium mb-3 text-rose-800">4. Narcissistic Personality Disorder</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Merasa dirinya lebih hebat dari orang lain dan memerlukan kekaguman dari
                      orang lain.</li>
                      <li>Kurang empati terhadap perasaan dan kebutuhan orang lain.</li>
                      <li>Sering merasa iri pada orang lain atau merasa orang lain iri padanya.</li>
                      <li>Eksploitasi orang lain demi keuntungan pribadi.</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-4 text-rose-800">Model Dimensional</h3>
                  <p className="text-rose-700 mb-4">
                  Selain pendekatan kategoris, DSM-5 juga mengusulkan model dimensional, yang melihat
gangguan kepribadian sebagai spektrum yang berkelanjutan dari sifat-sifat kepribadian
yang maladaptif.
<br /> <br />Pendekatan ini lebih fleksibel dalam mendiagnosis individu yang tidak memenuhi kriteria
gangguan tertentu tetapi memiliki pola kepribadian yang menyebabkan gangguan fungsi
sosial atau pekerjaan.
<h3 className="text-xl font-semibold mb-4 text-rose-800">Kriteria Umum Diagnosis Gangguan Kepribadian </h3>
                  <p className="text-rose-700 mb-4">
                  Untuk mendiagnosis gangguan kepribadian, pola perilaku seseorang harus memenuhi
                  kriteria berikut:
                  </p>
                  <h4 className="text-lg font-medium mb-3 text-rose-800">1. Menyimpang dari norma budaya dalam dua atau lebih aspek berikut:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Cara berpikir (persepsi terhadap diri sendiri, orang lain, dan peristiwa).</li>
                      <li>Respons emosional (intensitas, ketidakstabilan, dan kesesuaian emosi).</li>
                      <li>Interaksi sosial.</li>
                      <li>Kontrol impuls.</li>
                    </ul>
                    <h4 className="text-lg font-medium mb-3 text-rose-800">2. Pola perilaku tersebut harus:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li> Kaku dan terjadi di berbagai situasi.</li>
                      <li>Menyebabkan gangguan dalam kehidupan sosial, pekerjaan, atau bidang
                      penting lainnya.</li>
                      <li>Stabil dan berlangsung lama, dengan awal mula setidaknya sejak remajaatau awal dewasa.</li>
                      <li>Tidak disebabkan oleh gangguan mental lain atau efek zat tertentu
                      (misalnya, obat-obatan atau alkohol).</li>
                      </ul>
                  </p>
                  <h3 className="text-xl font-semibold mb-4 text-rose-800">Prevalensi Gangguan Kepribadian </h3>
                  <p className="text-rose-700 mb-4">
                  Berdasarkan data epidemiologis:
                  </p>
                    <ul className="list-disc pl-5 space-y-2 text-rose-700">
                      <li>Sekitar 9.1% populasi memiliki setidaknya satu gangguan kepribadian.</li>
                      <li>Klaster A: 5.7% (termasuk paranoid, skizoid, dan skizotipal).</li>
                      <li>Klaster B: 1.5% (termasuk antisosial, borderline, histrionik, dan narsistik).</li>
                      <li>Klaster C: 6.0% (termasuk avoidant, dependent, dan OCPD).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;