<template>
    <div class="section-padding contact-section overflow-hidden">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center">
                <div class="col">
                    <!-- Contact Information -->
                    <div class="contact-Information mr-xl-7">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Lets talk</span>
                            <h3 class="title">Vendors, Supplier, Investors, Customers are welcome to talk</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">Our Locations</h4>
                                <span class="info-text">Java Raya International LTD, <br/>  2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE, United Kingdom</span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <!-- <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">Give Us A Call</h4>
                                <span class="info-text"> 0123456789 / 0123456789</span>
                            </div>
                        </div> -->
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">Contact Us</h4>
                                <span class="info-text">
                                   <a href="https://form.jotform.com/240958272825162" target="_blank">Contact Form</a>
                                </span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->
                    </div>
                    <!-- Contact Information -->
                </div>

                <div class="col">
                </div>
            </div>
        </div>

        <!-- Animation Shape Start -->
        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/contact-shape.png" />

    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>