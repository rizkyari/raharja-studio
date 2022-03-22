<template>
    <div class="info-container">
        <div class="info-carousel"></div>
        <div class="info-content">
            <div class="info-studio">
                
            </div>
            <div class="title-info mb-3">
                Jakarta
            </div>
            <div class="info-loc mb-5">
                Jl. Paseban Barat, 5 No.22B, RT.5/RW.3, Paseban, Senen, Kota Jakarta Pusat, 
                Daerah Khusus Ibukota Senen, Jakarta, Indonesia - Tampilkan peta
            </div>
            <div class="title-info mb-3">
                Fasilitas
            </div>
            <div class="facility-wrapper d-flex justify-content-evenly mb-5">
                <div class="facility-item" v-for="(item,index) in facility" :key="index">
                    <img :src="require(`@/assets/icons/${item.image}`)" class="img-facility"/>
                    <div class="title-facility text-center mt-3">{{item.title}}</div>
                </div>
            </div>
            <div class="title-info mb-3">
                Raharja Studio
            </div>
            <div class="studio-info">
                Studio Raharja Pd Pinang adalah studio video dan foto pertama yang kami dirikan di daerah Pondok Pinang, 
                Jakarta Selatan. Hingga saat ini, kami memiliki 4 jenis studio yang sangat multifungsional. 
                Dimulai dari Kitchen Studio dengan style kontemporer minimalis yang cocok untuk keperluan konten memasak (Kuliner) 
                ataupun keperluan Food Photography, Podcast Studio dengan style Art Deco kekinian yang cocok untuk 
                konten podcastnya anak muda, Backdrop dan Seamless Studio yang cocok untuk kebutuhan project Fotografi 
                dan juga Videografi kamu, dan ada juga Lounge Studio dengan style kontemporer minimalis yang menghadirkan 
                suasana homie dan nyaman, cocok untuk memenuhi berbagai kebutuhan project kamu.
            </div>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>