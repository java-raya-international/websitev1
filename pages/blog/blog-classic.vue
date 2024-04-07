<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne activePageName="Blog Classic" title="Find all our latest news, insights, and events" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row  mtn-50">
                    <div class="col-lg-8 col-12 order-lg-1 mt-50">
                        <div class="row row-cols-1 no-gutters">
                            <div class="blog-3 col" data-aos="fade-up" v-for="(blog, index) in blogData.slice(0, 3)" :key="index">
                                <div class="thumbnail">
                                    <NuxtLink :to="`/blog/${blog.slug}`" class="image">
                                        <img :src="blog.imgSrc" :alt="blog.title">
                                    </NuxtLink>
                                </div>
                                <div class="info">
                                    <ul class="meta">
                                        <li>
                                            <i class="fal fa-pencil-alt"></i>
                                            Written by Admin, 10 Oct 2020
                                        </li>
                                        <li>
                                            <i class="fas fa-tags"></i>
                                            Marketing, UX Design
                                        </li>
                                        <li>
                                            <i class="fas fa-comments"></i>
                                            {{ blog.comment }} Comments
                                        </li>
                                    </ul>
                                    <h3 class="title">
                                        <NuxtLink :to="`/blog/${blog.slug}`">
                                            {{ blog.title }}
                                        </NuxtLink>
                                    </h3>
                                    <div class="desc mb-30">
                                        <p>We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.</p>
                                    </div>
                                    <NuxtLink :to="`/blog/${blog.slug}`" class="btn btn-primary btn-hover-secondary">Read More</NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div class="row">
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

                    <div class="col-lg-4 col-12 order-lg-2 mt-50">
                        <BlogSidebar />
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
    import blogData from "~/data/blog.json";

    export default {
        data() {
            return {
                blogData
            }
        },
    };
</script>


