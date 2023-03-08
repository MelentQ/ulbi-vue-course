import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        isLoading: false,
        posts: [],
        searchQuery: '',
        selectedSort: '',
        sortOptions: [
            {
                value: 'title',
                name: 'By Title'
            },
            {
                value: 'body',
                name: 'By Body'
            },
            {
                value: 'id',
                name: 'By Id'
            }
        ],
        page: 0,
        limit: 10,
        totalPages: 0
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                switch (typeof post1[state.selectedSort]) {
                    case 'string': {
                        return post1[state.selectedSort].localeCompare(post2[state.selectedSort]);
                    }
                    case 'number': {
                        return post1[state.selectedSort] - post2[state.selectedSort];
                    }
                }
            })
        },
        searchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setIsLoading(state, value) {
            state.isLoading = value
        },
        setPosts(state, value) {
            state.posts = value
        },
        setSearchQuery(state, value) {
            state.searchQuery = value
        },
        setSelectedSort(state, value) {
            state.selectedSort = value
        },
        setPage(state, value) {
            state.page = value
        },
        setTotalPages(state, value) {
            state.totalPages = value
        }
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setIsLoading', true)
                commit('setPage', state.page += 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (e) {
                alert(e);
            } finally {
                commit('setIsLoading', false)
            }
        },
        async fetchMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (e) {
                alert(e);
            }
        }
    },
}
