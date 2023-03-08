import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostListPage from "@/pages/PostListPage.vue";
import PostDetailPage from "@/pages/PostDetailPage.vue";
import PostListPageWithVuex from "@/pages/PostListPageWithVuex.vue";
import PostListPageWithComposition from "@/pages/PostListPageWithComposition.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostListPage
    },
    {
        path: '/posts/:id',
        component: PostDetailPage
    },
    {
        path: '/store',
        component: PostListPageWithVuex
    },
    {
        path: '/composition',
        component: PostListPageWithComposition
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
