<template>
    <div class="studio-container ">
        <div class="studio-item d-flex justify-content-between p-4 mb-4" v-for="(item, index) in content" :key="index">
            <div class="card-item" style="position: relative; left: 0; top: 0;">
                <img :src="require(`@/assets/images/${item.image}`)" class="img-studio"/>
                <div class="studio-loc p-1">{{item.location}}</div>
                <div class="available p-1">Per Jam | Shift | Harian</div>
            </div>
            <div class="studio-infos text-start">
                <div class="info-title">Tipe Studio</div>
                <div class="info-desc mb-2">{{item.type}}</div>
                <div class="info-title">Harga Per Jam</div>
                <div class="info-desc mb-2">{{item.price}}</div>
                <div class="info-title">Jadwal Studio</div>
                <div class="info-desc">{{item.schedule}}</div>
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