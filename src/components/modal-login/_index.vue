<template>
    <div class="modal fade" id="loginModal" tabindex="-" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="title-header">
                    <h5 class="modal-title" id="exampleModalLabel">Selamat Datang Di</h5>
                    <img class='main-logo' src="@/assets/images/main-logo.png"/>
                    <div class="modal-sub">Silahkan masuk untuk memesan studio</div>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <input type="email" class="input-item" id="FormControlInput1" placeholder="Masukan alamat email...">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="input-item" id="FormControlInput2" placeholder="Masukan password...">
                    </div>
                </div>
                <div class="modal-footers">
                    <a href="#" class="link-primary">Lupa Password</a>
                    <button type="button" class="btn btn-masuk my-3">Masuk</button>
                    <div class="daftar-text">Belum Punya akun? <a href="#" class="link-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Daftar</a></div>
                </div>
            </div>
        </div>
        <!-- <modal-register></modal-register> -->
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>