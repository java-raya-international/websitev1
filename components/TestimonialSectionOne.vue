<template>
    <div class="testimonial-section section-padding-t90 section-padding-bottom">
        <div class="container-fluid">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">What our customers are saying about our services</h2>
                <p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p>
            </div>
            <!-- Section Title End -->

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider" data-aos="fade-up">
                <swiper
                    :slides-per-view="3"
                    :space-between="30"
                    :speed="1000"
                    :loop="true"
                    :centered-slides="true"
                    :pagination="swiperOptions.pagination"
                >
                    <swiper-slide v-for="(testimonial, index) in testimonialData" :key="index">
                        <TestimonialItem :testimonial="testimonial" />
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide,
            TestimonialItem: () => import('@/components/TestimonialItem'),
        },

        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                },

                testimonialData: [
                    {
                        id: 1,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-1.png",
                        name: "Uzzal Hossain",
                        position: "Frontend Developer"
                    },
                    {
                        id: 2,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-2.png",
                        name: "Tasnim Akter",
                        position: "Marketing Manager"
                    },
                    {
                        id: 3,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-3.png",
                        name: "Yeasin Hossain",
                        position: "Team Leader"
                    }
                ]
            }
        },
    };
</script>