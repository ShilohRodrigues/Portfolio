<script setup>

import Tag from "../components/Tag.vue"
import { ref } from 'vue'

const props = defineProps({
  title: String,
  desc: Array,
  image: String,
  url: String,
  tagList: Array
})

const getImageUrl = (name) => {
  return `/images/${name}.png`
}

const hasURL = ref('');
if (props.url == null) hasURL.value = 'disabled';

</script>

<template>
    <div class="text">
      <a :class="hasURL" :href=url target="_blank">
        <h3>{{ title }}</h3> 
      </a>
      <p v-for="line in desc">{{ line }}</p>
      <div class="tags">
        <Tag v-for="tag in tagList" :name=tag />
      </div> 
    </div> 
    <a class="img-container" v-if="image != null" :href=url target="_blank">
      <img :src=getImageUrl(image)>
    </a>
    <div v-if="image == null" class="iframe-container-outer">
  		<div class="iframe-container">
        <iframe :src=url></iframe>
      </div> 
    </div>  
</template>

<style scoped>
.img-container img {
  width: 100%;
  height: auto;
}
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 901px) {
  .project .text {
    max-width: 30%;
  }
  .img-container {
    max-width: 50%;
  }
  .iframe-container-outer {
    width: 50%;
  }
}

@media only screen and (max-width: 900px) {
  .project .text {
    max-width: 80%;
    margin-bottom: 2rem;
  }
  .img-container {
    max-width: 80%;
  }
}

</style>