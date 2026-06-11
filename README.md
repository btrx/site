# Hub Materi — Pengembangan Gim Fase E

Situs statis (HTML/CSS/JS murni, tanpa build tool). Cukup buka `index.html` di browser.

## Struktur

    index.html              Hub: grid 12 kartu pertemuan
    css/style.css           Seluruh styling (dipakai hub & materi)
    js/meetings.js          Data daftar pertemuan (judul, status ready)
    js/hub.js               Merender grid kartu di hub
    js/deck.js              Engine slide untuk halaman materi
    materi/pertemuan-1.html Materi Pertemuan 1 (contoh lengkap)
    materi/_template-pertemuan.html  Template kosong untuk pertemuan baru

## Menambah materi pertemuan baru

1. Salin `materi/_template-pertemuan.html` menjadi `materi/pertemuan-N.html`.
2. Isi slide-nya (pakai `pertemuan-1.html` sebagai rujukan komponen).
3. Di `js/meetings.js`, ubah `ready:false` menjadi `ready:true`
   pada pertemuan yang bersangkutan.

Kartu di hub otomatis menjadi aktif dan tertaut ke halaman materinya.

## Navigasi di halaman materi

- Panah kiri/kanan atau spasi : pindah slide
- F : fullscreen
- Esc atau tombol "Hub Materi" : kembali ke hub
