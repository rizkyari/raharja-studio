<template>
    <footer class="footer mt-auto pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="footer-content col-md-6 col-lg-4 text-start">
                    <div class="logo mb-4">
                        <router-link to="/">
                            <img class='main-logo' src="@/assets/images/main-logo.png"/>
                        </router-link>
                    </div>
                    <div class="company-sum">
                        <span class="company-name">Raharja Studio </span>
                        adalah tempat untuk kalian <br/>menyewa ruangan creative
                    </div>
                    <div class="social-link my-4">
                        <img src='@/assets/icons/ig.png' class="ig-icons"/>
                    </div>
                    <div class="copyright">
                        <span>©2022 Raharja Studio</span>
                    </div>
                </div>
                <div class="col-lg-2">

                </div>
                <div class="footer-content fw-bold col-md-6 col-lg-6 footer-wrapper">
                    <div class="our-product">
                        <div class="text-start ul-title">Product</div>
                            <ul class="p-0 li-item">
                                <li>Download</li>
                                <li>Pricing</li>
                                <li>Location</li>
                            </ul>
                    </div>
                    <div class="our-product">
                        <div class="text-start ul-title">Engage</div>
                            <ul class="p-0 li-item">
                                <li @click="routeToFAQ">FAQ</li>
                                <li>Fasilitas</li>
                                <li @click="routeToAboutUs">About Us</li>
                                <li>privacy Policy</li>
                                <li @click="routeToTerms">Terms of Service</li>
                            </ul>
                    </div>
                    <div class="our-product">
                        <div class="text-start ul-title">Earn Money</div>
                            <ul class="p-0 li-item">
                                <li>Affiliate</li>
                                <li>Become Partner</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>