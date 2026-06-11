/* ============================================================
   Daftar pertemuan — sumber data tunggal untuk hub.
   Cara menandai materi sudah siap:
     1. Ubah ready: false  ->  ready: true
     2. Pastikan file materi/pertemuan-N.html sudah dibuat.
   ============================================================ */
const MEETINGS = [
  { n:1,  ready:true,  title:"Anatomi Game & Pengenalan GDD",     blurb:"Membedah rules, goals, dan feedback loop dari game yang sudah ada." },
  { n:2,  ready:false, title:"Komparasi Genre & Mekanik",         blurb:"Menukar game antar kelompok dan menyusun matriks perbandingan mekanik." },
  { n:3,  ready:false, title:"Psikologi Pemain & Core Loop",      blurb:"Memahami kapan pemain tertantang atau bosan, lalu merumuskan core loop sendiri." },
  { n:4,  ready:false, title:"Penyusunan Draf GDD 1 Halaman",     blurb:"Memindahkan ide ke dalam Game Design Document yang terstruktur." },
  { n:5,  ready:false, title:"Mekanik & Struktur Giliran",        blurb:"Menulis rulebook yang jelas tanpa celah dan menjabarkan urutan bermain." },
  { n:6,  ready:false, title:"Layout & Antarmuka Komponen",       blurb:"Membuat wireframe kartu, papan, atau token dengan prinsip UI/UX dasar." },
  { n:7,  ready:false, title:"Produksi Purwarupa (Alpha)",        blurb:"Membangun komponen fisik dan memastikan semua kelengkapan tersedia." },
  { n:8,  ready:false, title:"Finalisasi & Sanity Check (MVP)",   blurb:"Dry-run internal untuk melacak bug fisik sebelum diuji pemain luar." },
  { n:9,  ready:false, title:"Playtesting ke Pemain Eksternal",   blurb:"Menguji purwarupa ke kelompok lain dan mencatat observasi pemain." },
  { n:10, ready:false, title:"Evaluasi Data & Iterasi Mekanik",   blurb:"Mengelompokkan umpan balik dan memperbaiki desain berdasarkan data." },
  { n:11, ready:false, title:"Persiapan Pitching & Portofolio",   blurb:"Menyusun pitch deck dan mengunggah dokumen proyek ke portofolio digital." },
  { n:12, ready:false, title:"Pitching Day & Post-Mortem",        blurb:"Mempresentasikan game dan merefleksikan seluruh proses Fase 1." }
];
