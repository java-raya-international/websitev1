<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
                <!-- <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/">Home One</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/home-two">Home Two</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/home-three">Home Three</NuxtLink>
                    </li>
                </ul> -->
            </li>
            <li class="has-children">
                <NuxtLink to="#">Products</NuxtLink>
                <ul class="sub-menu"  >
                    <template v-for="(product, index) in productData.slice(0, 6)" :key="index">

                        <li>
                            <!-- <a href="{{ feature.slug }}">A</a>     -->

                            <!-- <NuxtLink to="/features/{features.slug}"> A </NuxtLink> -->


                            <NuxtLink :to="`/products/${product.slug}`" class="link">{{product.title}}</NuxtLink>
                        </li>
                    </template>

                    <!-- <li>
                        <NuxtLink :to="`/features/ai`">Artificial Intelligence</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/features/blockchain`">Blockchain</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/features/decentralized`">Decentralized ID</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/features/greenproduct`">Product</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/features/multidevice`">Any Device</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/features/msmb`">Business</NuxtLink>
                    </li> -->
                </ul>
            </li>
            <li>
                <NuxtLink to="/about/company">About</NuxtLink>
            </li>
            <!-- <li class="has-children">
                <NuxtLink to="/service">Service</NuxtLink>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/service">Service</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/service/branding">Service Details</NuxtLink>
                    </li>
                </ul>
            </li> -->
            <!-- <li class="has-children">
                <NuxtLink to="/project">Project</NuxtLink>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/project">Project</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/project/project-details">Project Details</NuxtLink>
                    </li>
                </ul>
            </li> -->
            <!-- <li class="has-children">
                <NuxtLink to="/blog">Blog</NuxtLink>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/blog">Blog Grid</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog/blog-classic">Blog Classic</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog/blog-details">Blog Details</NuxtLink>
                    </li>
                </ul>
            </li> -->
            <!-- <li>
                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
            </li> -->
        </ul>
    </nav>
</template>

<script>
    import productData from '~/data/products.json'
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                productData
            }
        },
    };
</script>