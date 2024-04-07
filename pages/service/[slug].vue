<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <BreadcrumbOne :activePageName="slug" :title="slug" backgroundUrl= "/images/bg/breadcrumb-bg-two.jpg" />

        <!-- service section start -->
        <section class="service-details-wrapper section-padding pb-125">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mtn-40 order-2 order-lg-1">
                        <div class="service-details-widget">
                            <div class="service-single-widget mt-40" :style="{backgroundColor: '#f8faff'}">
                                <h4 class="service-widget-title">Services</h4>
                                <ul class="service-list">
                                    <li><a href="#">Agency</a></li>
                                    <li><a href="#">Banking</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Financial</a></li>
                                    <li><a href="#">Marketing</a></li>
                                    <li><a href="#">Construction</a></li>
                                </ul>
                            </div>
                            <div class="service-single-widget mt-40" :style="{backgroundColor: '#f8faff'}">
                                <h4 class="service-widget-title">Download Brochure</h4>
                                <ul class="service-list">
                                    <li><a href="#">Brochures.PDF</a></li>
                                    <li><a href="#">Brochures.DOC</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="service-details">
                            <div class="service-details-thumb">
                                <img :src="service.imgSrc" :alt="service.title">
                            </div>
                            <h3 class="mt-4 mb-3">{{ service.title }}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error id ipsa atque unde quis dolore nobis eum aperiam enim blanditiis pariatur inventore eius commodi consectetur ut. Totam, assumenda! Laboriosam possimus, corporis dicta!</p>
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?</p>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="service-details-content mt-30">
                                        <h4>Project Analysis</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="service-details-content mt-30">
                                        <h4>Project Costing</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="service-details-content mt-30">
                                        <h4>Project Planning</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="service-details-content mt-30">
                                        <h4>Project Strategy</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service section end -->

        <TheFooter />
    </div>
</template>

<script>
    import serviceData from '~/data/service.json';
    export default {
        data() {
            return {
                serviceData,
                slug: this.$route.params.slug
            }
        },
        computed: {
            service() {
                return this.serviceData.find(service => service.slug === this.slug)
            }
        }
    };
</script>


