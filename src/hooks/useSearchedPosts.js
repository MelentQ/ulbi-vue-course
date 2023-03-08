import {computed, ref} from "vue";

export function useSearchedPosts(posts) {
    const searchQuery = ref('')

    const searchedPosts = computed(() => {
        return posts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchedPosts, searchQuery
    }
}