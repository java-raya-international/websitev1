<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne :activePageName="slug" title="Find all our latest news by category" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                    <div class="col mt-30" v-for="(blog, index) in categoriesBlog" :key="index">
                        <BlogGridItem :blog="blog" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <CallToActionTwo />
        <TheFooter />
    </div>
</template>

<script>
    import blogData from "~/data/blog.json"

    export default {
        data() {
            return {
                blogData,
                slug: this.$route.params.slug
            }
        },

        computed: {
            categoriesBlog() {
                return this.blogData.filter(item => item.categories.includes(this.slug))
            }
        },
    };
</script>


