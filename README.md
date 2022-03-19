# Kelompok-8-IF231-E

##GamePlay/Aturan Bermain
##Kelompok 8


Data anggota kelompok:
1. Gavin Yodha Maheswara - 000 000 61680
2. Hadi Bagus Permana - 000 000 12226
3. Karsten Samuel Shallom - 000 000 60496
4. Zaki Naufal - 000 000 61490


Peraturan / ketentuan:
* Waktu yang kami gunakan di sini yaitu 1 detik di dunia nyata = 1 Menit di in game
* Jika antara Makan , Main , dan juga tidur mencapai 0 , game akan berakhir dan akan memunculkan popup beserta tombol untuk nantinya pemain dapat memulai permainan dari awal
* Berikut adalah kondisi dari setiap aktifitas yang ada :

Kondisi keadaan : Diam
Makan: -1/3 Menit in game (3 detik)
Tidur :-1/10 Menit in game (10 detik)
Main : -1/5 Menit in game (5 detik)
Belajar : -1/30 Menit in game (30 detik)

List dari kondisi per 1x klik tombol Makan , Tidur, Main ,Belajar dalam halaman game  :

Kondisi : Makan
Cycle yang dijalankan : 10 cycle (10 Menit in game)
Makan: +1% / 1cycle Total /1x Click +10%
Tidur :-1% / 5cycle Total /1x Click -2%
Main: -1% / 5cycle Total /1x Click -2%
Belajar : -1% / 10cycle Total /1x Click -1%

Kondisi : Tidur
Cycle yang dijalankan : 25 cycle (25 Menit in game)
Tidur: +1% / 1cycle Total /1x Click +25%
Makan :-1% / 5cycle Total /1x Click -5%
Main: -1% / 3cycle Total /1x Click -8%
Belajar : -1% / 10cycle Total /1x Click -2%

Kondisi : Main
Cycle yang dijalankan : 15 cycle ( Menit in game)
Main: +1% / 1cycle Total /1x Click +15%
Makan :-1% / 3cycle Total /1x Click -5%
Tidur: -1% / 3cycle Total /1x Click -5%
Belajar : -1% / 5cycle Total /1x Click -3%

Kondisi : Belajar 
Cycle yang dijalankan : 20 cycle ( Menit in game)
Belajar: +1% / 1cycle Total /1x Click +20%
Makan:-1% / 2cycle Total /1x Click -10%
Tidur: -1% / 5cycle Total /1x Click -4%
Main : -1% / 7cycle Total /1x Click -2%


Cara Bermain :


1. Saat di awal permainan,user akan diminta untuk memilih avatar yang sudah disediakan di awal permainan(tersedia 6 avatar yaitu 3 karakter laki laki dan 3 karakter perempuan).

2. Saat mulai permainan user akan diberi 4 bar gameplay yaitu makan,tidur,main,belajar yang akan di mulai dari 50% untuk makan,50% untuk tidur,50% untuk main, dan 0 untuk belajar

3. Pada awal game,Character akan berposisi Diam/Idle.

4. Apabila User terus berposisi Idle,maka poin makan,tidur,belajar dan bermain akan berkurang,apabila salah satu bar Gameplay berkurang sampai 0,maka user akan mati. 

5. saat user memilih Makan maka Gameplay Tidur,bermain dan belajar akan berkurang sesuai dengan jam permainan

6. Setiap bar belajar mencapai 100 , semester yang ada akan bertambah terus menerus hingga semester 8 

7. Setiap pemain naik semester , maka bar Belajar akan menjadi 0% kembali tetapi untuk bar Makan , Tidur, dan Main akan tetap sama seperti semester sebelumnya (Berlanjut)

8. Setelah belajar mencapai 100 di semester 8 yaitu semester terakhir , maka pemain akan dinyatakan Wisuda! Dan akan ada tombol untuk nantinya kembali ke halaman awal.
