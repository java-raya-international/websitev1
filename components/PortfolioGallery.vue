<template>
    <div class="section-padding" :style="{backgroundColor: '#f8faff'}">
        <div class="container">
            <div class="row align-items-center mb-30">
                <div class="col-lg-5">
                    <!-- Section Title Two Start -->
                    <div class="section-title-two">
                        <span class="sub-title">Portfolios</span>
                        <h3 class="title">Selected works.</h3>
                    </div>
                    <!-- Section Title Two End -->
                </div>
                <div class="col-lg-7">
                    <div class="messonry-button text-lg-end">
                        <button @click="filterHandler('all')" :class="{'mixitup-control-active': selectedCat === 'all'}"><span class="filter-text">All</span></button>
                        <button v-for="(filter, index) in categories" :key="index" @click="filterHandler(filter)" :class="{ 'mixitup-control-active': selectedCat === filter }"><span class="filter-text">{{ filter }}</span></button>
                    </div>
                </div>
            </div>

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 box">
                <div class="col portfolio-item" :class="portfolio.category" v-for="(portfolio, index) in portfolios" :key="index">
                    <div v-if="selectedCat === portfolio.category || selectedCat === 'all'" class="single-portfolio">
                        <div class="thumbnail">
                            <img class="img-fluid" :src="portfolio.imgSrc" :alt="portfolio.title">
                        </div>
                        <div class="content">
                            <h5 class="title">
                                <NuxtLink to="/project/project-details">{{ portfolio.title }}</NuxtLink>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import portfolios from "~/data/portfolios.json"

    export default {
        data() {
            return {
                portfolios,
                categories: [],
                selectedCat: 'all'
            }
        },

        methods: {
            filterHandler(selection) {
                this.selectedCat = selection;
            },
            shuffle () {
                this.portfolios = this.portfolios.groupBy('category')
            },
            filterCategories(){
                this.categories = [...new Set(this.portfolios.map(item => item.category))];
            }
        },
        mounted(){
            this.filterCategories();
        }
    }
</script>

<style lang="scss">
    .portfolio-item:empty {
        display: none;
    }
</style>