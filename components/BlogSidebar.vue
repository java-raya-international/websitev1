<template>
    <div class="sidebar-widget-wrapper">
        <div class="sidebar-widget">
            <div class="sidebar-widget-content">
                <div class="sidebar-widget-search">
                    <form>
                        <input type="text" placeholder="Search...">
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title mb-2">Categories</h3>
            <div class="sidebar-widget-content">
                <ul class="sidebar-widget-cate-list">
                    <li v-for="(category, i) in allCategories" :key="i">
                        <NuxtLink :to="`/blog/categories/${category}`">
                            <span class="text">{{ category }}</span> <span class="count">{{ `${category.length}`.padStart(2, 0) }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title mb-2">Popular Posts</h3>
            <div class="sidebar-widget-content">
                <ul class="sidebar-widget-list-post">
                    <li v-for="(blog, i) in blogData" :key="i">
                        <span class="cate">
                            <NuxtLink :to="`/blog/categories/${cat}`" v-for="(cat, i) in blog.categories.slice(0, 1)" :key="i">
                                {{ cat }}
                            </NuxtLink>
                        </span>
                        <NuxtLink :to="`/blog/${blog.slug}`"> 
                            {{ blog.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sidebar-widget">
            <div class="sidebar-widget-content">
                <div class="sidebar-widget-banner bg-cover" data-overlay="0.7" :style="{ backgroundImage: `url('/images/bg/breadcrumb-bg.jpg')` }">
                    <h3 class="title">Subscribe to our newsletter</h3>
                    <p>All the latest marketing news, including updates on brand campaigns, and the most interesting insights</p>
                    <NuxtLink to="">Subscribe Now</NuxtLink>
                </div>
            </div>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title">Popular tags</h3>
            <div class="sidebar-widget-content">
                <div class="tagcloud">
                    <NuxtLink :to="`/blog/tags/${tag}`" v-for="(tag, i) in allTags" :key="i">
                        {{ tag }}
                    </NuxtLink>
                </div>
            </div>
        </div>
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

        computed: {
            allCategories() {
                return [...new Set(this.blogData.flatMap(item => item.categories))]
            },
            allTags() {
                return [...new Set(this.blogData.flatMap(item => item.tags))]
            }
        },
    }
</script>
