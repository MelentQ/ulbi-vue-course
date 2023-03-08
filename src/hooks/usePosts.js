import axios from "axios";
import {onMounted, ref} from "vue";

export function usePosts(limit) {
    const page = ref(1)
    const posts = ref([])
    const totalPage = ref(0)
    const isLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: page.value,
                    _limit: limit
                }
            })
            totalPage.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = [...response.data]
        } catch (e) {
            alert(e);
        } finally {
            isLoading.value = false
        }
    }

    const setPage = (value) => {
        page.value = value;
        fetching();
    }

    onMounted(fetching)

    return {
        posts, totalPage, isLoading, setPage, page
    }
}
