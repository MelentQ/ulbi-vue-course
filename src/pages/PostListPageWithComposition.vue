<template>
  <section>
    <div class="container">
      <h1>Post Page With Composition API</h1>
      <div class="controls">
        <my-button @click="openModal">Create Post</my-button>
        <my-input v-model="searchQuery" placeholder="Search" type="text" style="flex-grow: 1;"/>
        <my-select v-model="selectedSort" :options="sortOptions" placeholder="Sort By"/>
      </div>
      <post-list v-bind:posts="searchedPosts" @remove="removePost" v-if="!isLoading"/>
      <my-pagination :current-page="page" :pages-count="totalPage" @changePage="setPage"/>
      <my-loader v-if="isLoading"/>
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
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSearchedPosts} from "@/hooks/useSearchedPosts";

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
  name: "PostListPage",
  data() {
    return {
      isFormShown: false,
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
      ]
    }
  },
  setup(props) {
    const {posts, totalPage, isLoading, setPage, page} = usePosts(10)

    const {sortedPosts, selectedSort} = useSortedPosts(posts)

    const {searchQuery, searchedPosts} = useSearchedPosts(sortedPosts)

    return {posts, totalPage, isLoading, sortedPosts, selectedSort, searchQuery, searchedPosts, setPage, page}
  },
  methods: {
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
