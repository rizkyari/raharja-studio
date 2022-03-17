<template>
    <div class="modal fade" id="registerModal" tabindex="-" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="title-header">
                    <h5 class="modal-title" id="exampleModalLabel">Selamat Datang Di</h5>
                    <img class='main-logo' src="@/assets/images/main-logo.png"/>
                    <div class="modal-sub">Silahkan lakukan pendaftaran untuk memesan studio</div>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <select class="select-item">
                            <option>Individu</option>
                            <option>Perusahaan</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="input-item" id="FormControlInput1" placeholder="*Masukan email...">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="input-item" id="FormControlInput2" placeholder="*Masukan No Hp...">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="input-item" id="FormControlInput3" placeholder="*Masukan nama...">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="input-item" id="FormControlInput5" placeholder="*Masukan NIK...">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="input-item" id="FormControlInput6" placeholder="*Masukan NPWP...">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="input-item" id="FormControlInput7" placeholder="*Masukan Password...">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="input-item" id="FormControlInput8" placeholder="*Konfirmasi Password...">
                    </div>
                </div>
                <div class="modal-footers">
                    <button type="button" class="btn btn-masuk my-3">Daftar</button>
                    <div class="daftar-text">Sudah Punya akun? <a href="#" class="link-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Masuk</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>