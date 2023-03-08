<template>
  <section>
    <div class="container">
      <h1>Post Page</h1>
      <div class="controls">
        <my-button @click="openModal">Create Post</my-button>
        <my-input v-model="searchQuery" placeholder="Search" type="text" style="flex-grow: 1;"/>
        <my-select v-model="selectedSort" :options="sortOptions" placeholder="Sort By"/>
      </div>
      <post-list v-bind:posts="searchedPosts" @remove="removePost" v-if="!isLoading"/>
      <my-loader v-if="isLoading"/>
      <div v-intersection="fetchPosts"></div>
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
import axios from "axios";
import MyLoader from "@/components/UI/MyLoader.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination.vue";

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
      posts: [],
      isLoading: true,
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
      totalPage: 0
    }
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
    },
    async fetchPosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert(e);
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        switch (typeof post1[this.selectedSort]) {
          case 'string': {
            return post1[this.selectedSort].localeCompare(post2[this.selectedSort]);
          }
          case 'number': {
            return post1[this.selectedSort] - post2[this.selectedSort];
          }
        }
      })
    },
    searchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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
