<template>
    <div class="list-container">
        <x-header></x-header>
        <div class="list-wrapper">
            <list-breadcrumb></list-breadcrumb>
            <div class="list-studio d-flex">
                <filter-studio class="col-lg-3"></filter-studio>
                <div class="mx-4"></div>
                <studio-item class="col-lg-8"></studio-item>    
            </div>
        </div>
    </div>
</template>

<script src='./index.js'></script>
<style lang='sass' src='./index.sass' scoped></style>