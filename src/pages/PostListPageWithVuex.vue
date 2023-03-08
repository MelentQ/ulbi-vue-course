<template>
  <section>
    <div class="container">
      <h1>Post Page With Vuex</h1>
      <div class="controls">
        <my-button @click="openModal">Create Post</my-button>
        <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Search" type="text" style="flex-grow: 1;"/>
        <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" placeholder="Sort By"/>
      </div>
      <post-list v-bind:posts="searchedPosts" @remove="removePost" v-if="!isLoading"/>
      <my-loader v-if="isLoading"/>
      <div v-intersection="fetchMorePosts"></div>
      <my-modal :is-shown="isFormShown" title="Create Post" @close="closeModal">
        <post-form v-on:create="createPost"/>
      </my-modal>
    </div>
  </section>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import MyModal from "@/components/UI/MyModal.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyLoader from "@/components/UI/MyLoader.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination.vue";

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    MyPagination,
    MyInput,
    MySelect,
    MyLoader,
    MyButton,
    MyModal,
    PostForm, PostList
  },
  name: "PostListPageWithVuex",
  data() {
    return {
      isFormShown: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      fetchMorePosts: 'post/fetchMorePosts'
    }),
    createPost(post) {
      this.posts.unshift(post)
      this.isFormShown = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openModal() {
      this.isFormShown = true
    },
    closeModal() {
      this.isFormShown = false
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      isLoading: state => state.post.isLoading,
      posts: state => state.post.posts,
      searchQuery: state => state.post.searchQuery,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      searchedPosts: 'post/searchedPosts'
    })
  }
}
</script>

<style>
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
</style>
