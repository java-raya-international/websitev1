<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <HeroFixedBanner />
        <!-- <AboutTwo />
        <FunFact /> -->
        <FeatureOne :style="{backgroundColor: '#f8faff'}" />

        
        <!-- <SkillWithVideo /> -->
        <!-- <PortfolioGalleryTwo :style="{backgroundColor: '#f8faff'}" /> -->
        <!-- <TestimonialSectionOne /> -->
        <!-- <BlogSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <!-- <ContactSectionOne /> -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Java Raya International'
            }
        },
    };
</script>
