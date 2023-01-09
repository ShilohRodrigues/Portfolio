<script setup>
import Project from "../components/Project.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const props = defineProps({
  projects: Array
});

</script>

<template>
  <carousel ref="carousel" v-model="currentSlide" class="carousel-margin" :items-to-show="1">
    <slide v-for="project in projects" :key="project">
      <div class="project">
        <Project
          :title=project.title 
          :desc=project.desc
          :image=project.image
          :url=project.url
          :tagList=project.tagList />
      </div>
    </slide>
    <template #addons="{ slidesCount }">
      <navigation v-if="slidesCount > 1">
        <template #next>
          <span class="slider-btn">></span>
        </template>
        <template #prev>
          <span class="slider-btn">&lt;</span>
        </template>
      </navigation>
      <Pagination v-if="slidesCount > 1"/>
      <p class="swipe-txt" v-if="slidesCount > 1"></p>
    </template> 
  </carousel>
</template>

<style scoped>
.project {
  text-align:  left !important;
}

@media only screen and (min-width: 901px) {
  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 97%;
  }
  .swipe-txt:after {
    content: "Scroll for more! -->";
  }
}

@media only screen and (max-width: 900px) {
  .project {
    width: 100%;
  }
  .slider-btn {
    display: none;
  }
  .swipe-txt:after {
    content: "Swipe for more! -->";
  }
}

.carousel-margin {
  margin-top: 2rem;
}
.slider-btn {
  color: var(--arrow);
  transform: scale(1.5, 2.5);
}
.slider-btn:hover {
  color: var(--primary);
}
</style>