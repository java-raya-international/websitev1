<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <NuxtLink to="/">
                                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo">
                            </NuxtLink>
                        </div>
                        <!-- <div class="footer-widget-content">
                            <div class="content">
                                <a href="tel:(+1)212-946-2701">{{ footerData.footerAboutWidget.telephone }}</a>
                                <a href="mailto:hello@hasagency.com">{{ footerData.footerAboutWidget.email }}</a>
                            </div>
                            <div class="footer-social-inline">
                                <a :href="footerData.footerAboutWidget.twitterUrl" target="_blank">
                                    <i class="fab fa-twitter-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.fbUrl" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a :href="footerData.footerAboutWidget.instagramUrl" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div> -->
                    </div>
                </div>
                <!-- Footer Widget End -->

                <!-- Footer Widget Start -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleOne }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="(nav, index) in footerData.navListOne" :key="index">
                                    <NuxtLink :to="nav.navUrl" :target="nav.target">{{ nav.navTitle }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

                <!-- Footer Widget Start -->
                <!-- <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleTwo }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="(nav, index) in footerData.navListTwo" :key="index">
                                    <NuxtLink :to="nav.navUrl">{{ nav.navTitle }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- Footer Widget End -->

                <!-- Footer Widget Start -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleThree }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="(nav, index) in footerData.navListThree" :key="index">
                                    <NuxtLink :to="nav.navUrl" :target="nav.target">{{ nav.navTitle }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

                <!-- Footer Widget Start -->
                <!-- <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleFour }}</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="(nav, index) in footerData.navListFour" :key="index">
                                    <NuxtLink :to="nav.navUrl">{{ nav.navTitle }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- Footer Widget End -->
            </div>
            <!-- Footer Top Widgets End -->

            <!-- Footer Copyright Start -->
            <div class="row">
                <div class="col">
                    <p class="copyright">&copy; 2024 Java Raya International LTD.</p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>

<script>
    import footerData from '~/data/footer.json';

    export default {
        data() {
            return {
                footerData
            }
        },
    };
</script>