# UTS Pemrograman Web 1  
Project Konversi Desain Figma ke Website  
Tahun Akademik 2025/2026  

## 👤 Identitas Mahasiswa
- **Nama:** Happy Citra Lestari  
- **NIM:** 24090103  
- **Kelas:** D4 TI D  

---

## 📁 Link Penting
- **GitHub Repository:** https://github.com/hpycitra/uts-HappyCitraL-24090103
- **GitHub Pages:**  https://hpycitra.github.io/uts-HappyCitraL-24090103/


---

## 📌 Deskripsi Project  
Project ini dibuat untuk memenuhi Ujian Tengah Semester Mata Kuliah **Pemrograman Web 1**.  
Tugasnya adalah mengonversi desain Figma menjadi website menggunakan **HTML, CSS, dan JavaScript dasar**, dengan tiga halaman utama:

1. **index.html** — Halaman Login  
2. **dashboard.html** — Halaman Dashboard  
3. **products.html** — Halaman Data Produk  

Ketiga halaman tersebut adalah **halaman inti yang sesuai project uts**.

---

## 🟦 Halaman Login (`index.html`)
- Input email dan password (password = NIM)
- Validasi form tidak boleh kosong
- Alert "Login berhasil" jika sukses
- Redirect ke dashboard
- Menggunakan CSS dan JavaScript dari file utama:
  - `style.css`
  - `script.js`

---

## 📊 Halaman Dashboard (`dashboard.html`)
- Menampilkan 3 summary utama:
  - Total Products  
  - Total Sales  
  - Total Revenue  
- Data berasal dari `script.js`
- Tombol menuju halaman data produk
- Menggunakan `style.css` dan `script.js`

---

## 📦 Halaman Data Produk (`products.html`)
- Menampilkan tabel produk:
  - No, Product Name, Price, Stock, Aksi
- Data berasal dari array di `script.js`
- Fitur Edit → alert nama produk
- Fitur Delete → hapus baris menggunakan DOM + konfirmasi
- Menggunakan `style.css` dan `script.js`

---

## 📝 Catatan Penggunaan CSS & JavaScript  
Project ini hanya memiliki **satu** file CSS (`style.css`) dan **satu** file JavaScript (`script.js`).  
Kedua file ini dibuat **khusus untuk halaman utama**:

✔ index.html  
✔ dashboard.html  
✔ products.html  

Sementara itu, halaman tambahan seperti:

- laporan.html  
- pengaturan.html  
- setings.html  
- total-products.html  
- total-sales.html  
- total-revenue.html  

juga ikut menggunakan `style.css` dan `script.js` yang sama **hanya untuk membuat tampilan lebih rapi dan konsisten**,  
**namun halaman tersebut BUKAN bagian penilaian UTS**.

---

## 🖼️ Folder Assets (Gambar & Icon)
Semua gambar dan icon digunakan beberapa halaman disimpan dalam:
assets/image/

Isi folder (sesuai project):

- dataproduk.png  
- edit.png  
- home.png  
- iconemail.png  
- iconfb.png  
- iconggl.png  
- iconpassword.png  
- laporan.png  
- login_illustration.png  
- pengaturan.png  
- penjualan.png  
- totalproducts.png  
- totalrevenue.png  
- totalsales.png  
- trash.png  

Path untuk memanggil gambar:
assets/image/namafile.png



## 📂 Struktur Folder Project

UTS_HAPPY/
├── assets/
│ └── image/
│ ├── dataproduk.png
│ ├── edit.png
│ ├── home.png
│ ├── iconemail.png
│ ├── iconfb.png
│ ├── iconggl.png
│ ├── iconpassword.png
│ ├── laporan.png
│ ├── login_illustration.png
│ ├── pengaturan.png
│ ├── penjualan.png
│ ├── totalproducts.png
│ ├── totalrevenue.png
│ ├── totalsales.png
│ └── trash.png
│
├── index.html ← halaman utama login
├── dashboard.html ← halaman utama dashboard
├── products.html ← halaman utama products
│
├── style.css ← untuk halaman utama
├── script.js ← untuk halaman utama
│
├── laporan.html ← halaman tambahan
├── pengaturan.html ← halaman tambahan
├── setings.html ← halaman tambahan
├── total-products.html ← halaman tambahan
├── total-sales.html ← halaman tambahan
├── total-revenue.html ← halaman tambahan
│
└── README.md
