<template>
    <div class="card-carousel-wrapper">
    <div class="carousel-control-prev-icon nav-icon" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
          <div class="card-carousel--card carousel-wrapper text-" v-for="(item,index) in items" :key="index">
                <img :src="require(`@/assets/images/${item.image}`)" class="img-carousel"/>
                <div class="card-carousel--card--footer carousel-title">
                     <p>{{ item.name }}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-control-next-icon nav-icon" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
  </div>
</template>

<script src='./index.js'></script>

<style lang="sass" src="./index.sass" scoped></style>
