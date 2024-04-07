<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30">
                        <div class="col mt-30" data-aos="fade-up" v-for="(item, i) in funFacts" :key="i">
                            <div class="funfact">
                                <div class="number">
                                    <span class="counter">
                                        {{item.count}}
                                    </span>
                                </div>
                                <h6 class="text">{{ item.text }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import funFacts from "~/data/funfacts.json"
    export default {
        data () {
            return {
                funFacts
            }
        }
    };
</script>