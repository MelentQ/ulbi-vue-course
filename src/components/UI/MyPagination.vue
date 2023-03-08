<template>
  <div class="pagination">
    <button class="pagination__item" :class="{
      'pagination__item active': currentPage === pageNumber
    }" v-for="pageNumber in pagesCount" :key="pageNumber" @click="$emit('changePage', pageNumber)">{{ pageNumber }}</button>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: {
    pagesCount: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.pagination__item {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.6rem;
  height: 3.6rem;
  padding: 0.4rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;

  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
}

.pagination__item.active {
 background-color: seagreen;
  color: white;
}
</style>