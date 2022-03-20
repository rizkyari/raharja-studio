<template>
    <div class="header-container">
        <div class="header-wrapper">
                <img class='main-logo' src="@/assets/images/main-logo.png"/>
                <div class="menu-item">
                    <div class="home-link" @click="routeToHome">Home</div>
                    <div class="studio-link">List Studio</div>
                    <img src="@/assets/icons/cart-red.png" class="cart-icon"/>
                    <div class="login-trigger">
                        <div class="login-link" data-bs-toggle="modal" data-bs-target="#loginModal">Masuk / Daftar</div>
                        <img class="arrow-icon" src="@/assets/icons/arrow-grey.png"/>
                    </div>
                </div>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>