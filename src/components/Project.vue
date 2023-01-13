<script setup>

import Tag from "../components/Tag.vue"
import Link from "../components/icons/Link.vue"
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

const hover = ref('invisible-img-link');
const hoverOn = () => {
  hover.value = 'visible-img-link';
}
const hoverOff = () => {
  hover.value = 'invisible-img-link';
}

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
    <div 
    class="img-container" 
    v-if="image != null" 
    @mouseover="hoverOn" 
    @mouseleave="hoverOff">
      <img :src=getImageUrl(image)>
      <a
      v-if="url != null"
      :href="url"
      target="_blank"
      :class="hover" 
      class="img-link center-me">
        <div><Link /></div>
      </a>
    </div>
    <div v-if="image == null" class="iframe-container-outer">
  		<div class="iframe-container">
        <iframe :src=url></iframe>
      </div> 
    </div>  
</template>

<style scoped>
.img-container {
  position: relative;
}
.img-container img {
  width: 100%;
  height: auto;
  max-height: 27rem;
}
.img-link {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0.5rem;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transform: scale(0.9);
  z-index: -2;
}
.img-link div {
  background-color: unset;
}
.visible-img-link {
  opacity: 1 !important;
  transform: scale(1) !important;
  z-index: 2 !important;
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