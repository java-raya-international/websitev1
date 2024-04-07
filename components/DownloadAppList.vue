<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle title="Unique Marketplace APP" sub-title="Shopping with better experiences" add-class-name="mb-60" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(download, index) in downloadData.slice(0, 3)" :key="index" >
                    <div class="icon-box text-center" :class="addClassName" style="height: 400px;">
                        <div class="icon">
                            <img :src="download.iconSrc" :alt="download.title" style="height:50px;">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ download.title }}</h3>
                            <div class="desc">
                                <p>{{ download.text }}</p>
                            </div>
                            <div>
                                Still in development
                            </div>
                            <!-- <NuxtLink :to="`/service/${feature.slug}`" class="link">View Details</NuxtLink> -->
                            <!-- <NuxtLink :to="`/features/${feature.slug}`" class="link">View Details</NuxtLink> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import downloadData from '~/data/download.json'
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                downloadData
            }
        },
    };
</script>