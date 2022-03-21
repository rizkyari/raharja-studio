<template>
    <div class="filter-container p-4">
        <div class="filter-form">
            <form>
                <div class="mb-3">
                    <select class="select-item">
                        <option value="" selected hidden>Pilih tipe studio</option>
                        <option>Individu</option>
                        <option>Perusahaan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <select class="select-item">
                        <option value="" selected hidden>Pilih kategori waktu sewa</option>
                        <option>Individu</option>
                        <option>Perusahaan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <input type="email" class="select-item input-texts" id="FormControlInput1" placeholder="Tentukan harga terendah">
                </div>
                <div class="mb-3">
                    <input type="number" class="select-item input-texts" id="FormControlInput2" placeholder="Tentukan harga tertinggi">
                </div>
                <div class="mb-3">
                    <select class="select-item" disabled>
                        <option value="" disabled selected hidden>Jakarta</option>
                        <option>Individu</option>
                        <option>Perusahaan</option>
                    </select>
                </div>
                <button type="button" class="btn btn-masuk my-3">
                    Terapkan Pencarian
                </button>
            </form>
        </div>
        <div class="order-text text-start p-4">
            <div class="title-txt">Kebijakan Pemesanan</div>
            <div class="desc-txt py-4">
                <ul desc-text>
                    <li>
                        Penyewa studio wajib mematuhi protokol kesehatan (Wajib memakai masker) 
                    </li>
                    <li>
                        Membuang sampah pada tempat yang telah disediakan dan menjaga kebersihan area dan fasilitas studio
                    </li>
                </ul>
            </div>
        </div>
        <button type="button" class="btn btn-masuk my-3">
                Lihat Cara Pesan
        </button>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>