<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Blog Grid" title="Find all our latest news, insights, and events" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                    <div class="col mt-30" v-for="(blog, index) in blogData" :key="index">
                        <BlogGridItem :blog="blog" />
                    </div>
                </div>

                <div class="row mt-50">
                    <div class="col">
                        <ul class="pagination center">
                            <li class="page-item">
                                <a href="#"><i class="fa fa-angle-left"></i></a>
                            </li>
                            <li class="page-item active">
                                <a href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a href="#"><i class="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
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
                blogData
            }
        },
    };
</script>


