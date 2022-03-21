<template>
    <div class="studio-container ">
        <div class="studio-item d-flex justify-content-between p-4">
            <div class="card-item" style="position: relative; left: 0; top: 0;">
                <img src='@/assets/images/studio-exp1.png' class="img-studio"/>
                <div class="studio-loc p-1">Jakarta Selatan</div>
                <div class="available p-1">Per Jam | Shift | Harian</div>
            </div>
            <div class="studio-infos text-start">
                <div class="info-title">Tipe Studio</div>
                <div class="info-desc mb-2">Meeting Room</div>
                <div class="info-title">Harga Per Jam</div>
                <div class="info-desc mb-2">Rp. 25.000</div>
                <div class="info-title">Jadwal Studio</div>
                <div class="info-desc">Selasa - Kamis | 07:00 - 13:00 WIB</div>
            </div>
            <div class="btn-wrapper">
                    <button type="button" class="btn btn-order">
                        Pesan Studio
                    </button>
                <div>
                    <button type="button" class="btn btn-cart my-3">
                        Masukan Keranjang
                    </button>
                </div>   
            </div>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>