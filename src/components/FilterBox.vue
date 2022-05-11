<template>
  <div
    class="filter-item"
    :class="필터이미지"
    :style="`background-image:url(${이미지})`"
    @click="fire"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "filterBox",
  props: {
    이미지: String,
    필터이미지: String,
  },
  methods: {
    fire() {
      this.emitter.emit("필터", this.필터이미지);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>