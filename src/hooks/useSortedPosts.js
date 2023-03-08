import {computed, ref} from "vue";

export function useSortedPosts(posts) {
    const selectedSort = ref('')

    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => {
            switch (typeof post1[selectedSort.value]) {
                case 'string': {
                    return post1[selectedSort.value].localeCompare(post2[selectedSort.value]);
                }
                case 'number': {
                    return post1[selectedSort.value] - post2[selectedSort.value];
                }
            }
        })
    })

    return {selectedSort, sortedPosts}
}