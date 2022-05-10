<template>
  <div>
    <PostItem :dataItems="dataItems[i]" v-for="(a, i) in dataItems" :key="i" />
    <!-- <PostItem :dataItems="dataItems[1]" />
    <PostItem :dataItems="dataItems[2]" /> -->
  </div>
</template>

<script>
import PostItem from "./PostItems.vue";
export default {
  name: "ContainerItems",
  components: {
    PostItem,
  },
  props: {
    dataItems: Array,
  },
};
</script>

<style>
</style>