<template>
    <div class="brand-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-wrapper">
                        <div class="brand-list">
                            <swiper
                                    :space-between="30"
                                    :speed="1000"
                                    :loop="false"
                                    :autoplay="{'delay': 3000}"
                                    :breakpoints="swiperOptions.breakpoints"
                                >
                                <swiper-slide class="brand" v-for="(brand, index) in brandData" :key="index">
                                    <NuxtLink to="">
                                        <img :src="brand.logo" alt="brand.alt">
                                    </NuxtLink>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay} from 'swiper/core';
    SwiperCore.use([Autoplay]);

    import brandData from '~/data/brand-logo.json'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                brandData,

                swiperOptions: {
                    breakpoints: {
                        992:{
                            slidesPerView : 6
                        },
                        768:{
                            slidesPerView : 4
                        },
                        576:{
                            slidesPerView : 3
                        },
                        320:{
                            slidesPerView : 2
                        }
                    }
                },
            }
        },
    };
</script>