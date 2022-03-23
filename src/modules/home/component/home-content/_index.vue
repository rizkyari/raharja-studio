<template>
    <div class='content-container'>
        <div class="lokasi-studio my-5">
            <h3 class="loc-title">Lokasi Studio</h3>
            <p class="loc-desc">Lokasi Studio Kami Berdasarkan Wilayah</p>
            <div class="slider-loc">
                <multi-carousel></multi-carousel>
            </div>
        </div>
        <div class="custom-needs d-flex align-items-center">
            <div class="frame-video col-lg-5">
                <iframe width="558" height="357" src="https://www.youtube.com/embed/4XdOC0C7kPQ" class="video-embed"
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
            </div>
            <div class="col-lg-2"></div>
            <div class="summary-custom col-lg-5 text-start">
                <h3 class="custom-title">Custom Kebutuhan Kamu</h3>
                <p class="custom-sub">Request Kebutuhan Kamu Disini</p>
                <div class="custom-desc">
                    Beri tahu kami apa saja kebutuhan kamu lebih mendalam, 
                    seperti additional equipment, jasa Man Power, 
                    jasa Live Streaming, dan Event Organizing. 
                    Hubungi kami untuk konsultasikan kebutuhan kamu dan dapatkan informasi lebih lanjut.
                </div>
                <button class="button-hubungi mt-4" >
                    <div class="button-wrapper"> 
                        <img src='@/assets/icons/cs-icon.png' class="cs-head"/>
                        <div>
                            Pilih Nomor Hp Kami
                        </div>
                        <img class="arrow-icon" src="@/assets/icons/arrow-down.png"/>
                    </div>
                </button>
            </div>
        </div>
        <div class="achievement-wrapper d-flex align-items-center justify-content-around py-5">
            <div class="total-client d-flex align-items-center">
                <img src='@/assets/icons/user.png' class="total-icon"/>
                <div class="total-desc text-start">
                    <div class="total-num">90+</div>
                    <div class="total-subject">Client</div>
                </div>
            </div>
            <img src='@/assets/icons/divider.png' class="divider"/>
            <div class="total-loc d-flex align-items-center">
                <img src='@/assets/icons/location.png' class="total-icon"/>
                <div class="total-desc text-start">
                    <div class="total-num">30+</div>
                    <div class="total-subject">Locations</div>
                </div>
            </div>
            <img src='@/assets/icons/divider.png' class="divider"/>
            <div class="total-studio d-flex align-items-center">
                <img src='@/assets/icons/Server.png' class="total-icon"/>
                <div class="total-desc text-start">
                    <div class="total-num">5+</div>
                    <div class="total-subject">Studio</div>
                </div>
            </div>
        </div>
        <div class="custom-needs d-flex align-items-center ">
            <div class="facility-item col-lg-5">
                <single-carousel></single-carousel>
            </div>
            <div class="col-lg-2"></div>
            <div class="summary-custom col-lg-5 text-start">
                <h3 class="custom-title">Fasilitas khusus hanya untukmu</h3>
                <p class="custom-sub">Fasilitas kami</p>
                <div class="custom-desc">
                    Jelajahi semua fasilitas yang kami sediakan khusus untuk mu di studio kami
                </div>
            </div>
        </div>
        <div class="partner-content">
            <div class="partner-label">
                <h1 class="partner-title">
                    #TemanKreasimu
                </h1>
                <div class="partner-desc mb-5">
                    Ini adalah kreasi karya dari Production House, Content Creator,
                    Instansi maupun Badan<br/> Usaha yang pernah menggunakan studio kami untuk berkarya.
                    Kamu bisa melihatnya<br/> melalui media sosial dan Channel Youtube mereka
                </div>
                <many-carousel :items="partners"></many-carousel>
            </div>
        </div>
        <div class="update-info d-flex align-items-center justify-content-between my-5">
            <div class="title-desc">
                <div class="title-text mb-3">
                    Dapatkan Update Info dan Promo dari kami dengan<br/> berlangganan
                </div>
                <a href='#' class="title-link">
                    Lihat Instagram
                </a>
            </div>
            <button class="button-pesan" >
                    <div class="button-wrapper"> 
                        Pesan Sekarang!
                    </div>
                </button>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>