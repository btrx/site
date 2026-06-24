# Hub Materi — Pengembangan Gim Fase E

Situs statis (HTML/CSS/JS murni, tanpa build tool). Cukup buka `index.html` di browser.

## Struktur

    index.html              Hub: tab kelas (X/XI/XII) + grid kartu pertemuan
    css/style.css           Seluruh styling (hub, materi, & cetak/PDF)
    js/meetings.js          Data kelas & daftar pertemuan (judul, status ready)
    js/hub.js               Merender tab kelas + grid kartu di hub
    js/deck.js              Engine slide + tombol unduh PDF di halaman materi
    materi/pertemuan-1.html Materi Pertemuan 1 (contoh lengkap)
    materi/_template-pertemuan.html  Template kosong untuk pertemuan baru

## Tab kelas (X / XI / XII)

Hub menampilkan tab untuk tiap kelas. Mengganti tab hanya menukar isi grid —
tidak berpindah halaman. Data tiap kelas ada di `GRADES` (`js/meetings.js`):
Kelas X sudah berisi 12 pertemuan Fase E; Kelas XI & XII masih kosong
(menampilkan status "segera hadir") sampai daftar pertemuannya diisi.

## Menambah materi pertemuan baru

1. Salin `materi/_template-pertemuan.html` menjadi `materi/pertemuan-N.html`.
2. Isi slide-nya (pakai `pertemuan-1.html` sebagai rujukan komponen).
3. Di `js/meetings.js`, pada kelas yang sesuai, ubah `ready:false` menjadi
   `ready:true` untuk pertemuan tersebut (dan pastikan `file` menunjuk ke
   nama berkas yang benar).

Kartu di hub otomatis menjadi aktif dan tertaut ke halaman materinya.

## Mengisi materi Kelas XI / XII

Tambahkan objek pertemuan ke array `meetings` pada kelas yang bersangkutan di
`js/meetings.js`, lalu beri `file` yang unik (mis. `k11-pertemuan-1.html`)
dan buat berkas materinya dari template.

## Navigasi di halaman materi

- Panah kiri/kanan atau spasi : pindah slide
- F : fullscreen
- P atau tombol "Unduh PDF" : cetak/simpan materi sebagai PDF (tiap slide 1 halaman)
- Esc atau tombol "Hub Materi" : kembali ke hub
