<template>
  <div v-if="step == 0">
    <PostItem :dataItems="dataItems[i]" v-for="(a, i) in dataItems" :key="i" />
  </div>
  <div v-if="step == 1">
    <div
      class="upload-image"
      :class="필터적용"
      :style="`background-image:url(${이미지})`"
    ></div>
    <div class="filters">
      <FilterBox
        :필터이미지="필터이미지[k]"
        :이미지="이미지"
        v-for="(a, k) in 필터이미지"
        :key="k"
      >
        {{ 필터이미지[k] }}
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div
      class="upload-image"
      :class="필터적용"
      :style="`background-image:url(${이미지})`"
    ></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">
write!</textarea
      >
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItems.vue";
import FilterBox from "./FilterBox.vue";
import filterdata from "../assets/filterdata";
export default {
  name: "ContainerItems",
  data() {
    return {
      필터이미지: filterdata,
    };
  },

  components: {
    PostItem,
    FilterBox,
  },
  props: {
    dataItems: Array,
    step: Number,
    이미지: String,
    필터적용: String,
  },
};
</script> 

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>