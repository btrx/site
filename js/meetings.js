/* ============================================================
   Daftar kelas & pertemuan — sumber data tunggal untuk hub.

   Struktur: setiap kelas (X / XI / XII) punya daftar pertemuan.
   Hub menampilkan tab kelas; mengganti tab tidak berpindah halaman.

   Menandai sebuah materi sudah siap dibuka:
     1. Ubah  ready:false  ->  ready:true
     2. Pastikan file materi/<file>.html sudah dibuat.

   Menambah pertemuan untuk Kelas XI / XII:
     Isi array `meetings`-nya mengikuti pola Kelas X di bawah,
     lalu beri `file` yang unik (mis. "k11-pertemuan-1.html").
   ============================================================ */
const GRADES = [
  {
    id: 10,
    label: "Kelas X",
    phase: "Fase E",
    phaseTag: "Fase 1 · Perancangan Analog (Board & Card Game)",
    meetings: [
      { n:1,  ready:true,  title:"Anatomi Game & Pengenalan GDD",     blurb:"Membedah rules, goals, dan feedback loop dari game yang sudah ada.", file:"pertemuan-1.html" },
      { n:2,  ready:false, title:"Komparasi Genre & Mekanik",         blurb:"Menukar game antar kelompok dan menyusun matriks perbandingan mekanik.", file:"pertemuan-2.html" },
      { n:3,  ready:false, title:"Psikologi Pemain & Core Loop",      blurb:"Memahami kapan pemain tertantang atau bosan, lalu merumuskan core loop sendiri.", file:"pertemuan-3.html" },
      { n:4,  ready:false, title:"Penyusunan Draf GDD 1 Halaman",     blurb:"Memindahkan ide ke dalam Game Design Document yang terstruktur.", file:"pertemuan-4.html" },
      { n:5,  ready:false, title:"Mekanik & Struktur Giliran",        blurb:"Menulis rulebook yang jelas tanpa celah dan menjabarkan urutan bermain.", file:"pertemuan-5.html" },
      { n:6,  ready:false, title:"Layout & Antarmuka Komponen",       blurb:"Membuat wireframe kartu, papan, atau token dengan prinsip UI/UX dasar.", file:"pertemuan-6.html" },
      { n:7,  ready:false, title:"Produksi Purwarupa (Alpha)",        blurb:"Membangun komponen fisik dan memastikan semua kelengkapan tersedia.", file:"pertemuan-7.html" },
      { n:8,  ready:false, title:"Finalisasi & Sanity Check (MVP)",   blurb:"Dry-run internal untuk melacak bug fisik sebelum diuji pemain luar.", file:"pertemuan-8.html" },
      { n:9,  ready:false, title:"Playtesting ke Pemain Eksternal",   blurb:"Menguji purwarupa ke kelompok lain dan mencatat observasi pemain.", file:"pertemuan-9.html" },
      { n:10, ready:false, title:"Evaluasi Data & Iterasi Mekanik",   blurb:"Mengelompokkan umpan balik dan memperbaiki desain berdasarkan data.", file:"pertemuan-10.html" },
      { n:11, ready:false, title:"Persiapan Pitching & Portofolio",   blurb:"Menyusun pitch deck dan mengunggah dokumen proyek ke portofolio digital.", file:"pertemuan-11.html" },
      { n:12, ready:false, title:"Pitching Day & Post-Mortem",        blurb:"Mempresentasikan game dan merefleksikan seluruh proses Fase 1.", file:"pertemuan-12.html" }
    ]
  },
  {
    id: 11,
    label: "Kelas XI",
    phase: "Fase F",
    phaseTag: "",
    meetings: []
  },
  {
    id: 12,
    label: "Kelas XII",
    phase: "Fase F",
    phaseTag: "",
    meetings: []
  }
];
