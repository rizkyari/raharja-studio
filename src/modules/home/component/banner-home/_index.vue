<template>
    <div class="banner-container">
        <img src="@/assets/images/home-bg.png" class="bg-image"/>
        <div class="content-wrapper">
            <div class="header-wrapper">
                <img class='main-logo' src="@/assets/images/main-logo.png"/>
                <div class="menu-item">
                    <div class="home-link">Home</div>
                    <div class="studio-link">List Studio</div>
                    <img src="@/assets/icons/cart-circle.png" class="cart-icon"/>
                    <div class="login-trigger">
                        <div class="login-link" data-bs-toggle="modal" data-bs-target="#loginModal">Masuk / Daftar</div>
                        <img class="arrow-icon" src="@/assets/icons/arrow-down.png"/>
                    </div>
                </div>
            </div>
            <div class="banner-text">
                <div class="banner-title">
                    Dapatkan Potongan Sewa
                </div>
                <div class="banner-sub">
                    Lihat semua studio yang kami miliki<br/> lalu lakukan sewa Studio yang lebih untuk mendapkan penawaran khusus
                </div>
                <button class="button-hubungi" >
                    <div class="button-wrapper"> 
                    <img src='@/assets/icons/cs-icon.png' class="cs-head"/>
                    <div>
                        Hubungi Kami
                    </div>
                    </div>
                </button>
            </div>
        </div>
        <modal-login></modal-login>
        <modal-register></modal-register>
    </div>    
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>
