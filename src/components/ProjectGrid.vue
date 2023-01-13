<script setup>
import Project from "./Project.vue"
import Expand from "../components/icons/Expand.vue"
import Close from "../components/icons/Close.vue"
import { ref } from 'vue'
import { RouterLink, RouterView } from "vue-router";

const props = defineProps({
  projects: Array
});

const getImageUrl = (name) => {
  return `/images/${name}.png`
}

const hover = ref(false);
const clicked = ref(null);

</script>

<template>
  <Transition>
    <div v-if="clicked==null" class="project-grid">
      <a
      v-for="(project, index) in projects" 
      @mouseover="hover=index" 
      @mouseleave="hover=false" class="grid-item"
      href="#projects">
        <img :src=getImageUrl(project.image)>
        <div 
        @click="clicked=index"
        :class="(hover===index) ? 'visible-p-info' : 'invisible-p-info'" 
        class="project-info center-me">
          <div>
            <h3>{{ project.title }}</h3>
            <p class="expand-txt">Expand <span style="vertical-align: middle;"><Expand /></span></p>         
          </div>
        </div>
      </a>
    </div>  
  </Transition>
  <template v-for="(project, index) in projects">
    <Transition>
      <div 
        v-if="clicked===index" 
        class="project" >
        <close 
          class="close-project"
          @click="clicked=null">
        </close>
        <Project
          :title=project.title 
          :desc=project.desc
          :image=project.image
          :url=project.url
          :tagList=project.tagList />
      </div>
    </Transition>  
  </template>
</template>

<style scoped>
.project-grid {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(min(17rem, 100%), 1fr));
  gap: 1rem;
  margin: 2rem 6rem;
  transform-origin: top left;
}
.grid-item {
  position: relative;
  text-align: center;
  cursor: pointer;
}
.grid-item img {
  object-fit: cover;
  aspect-ratio: 1 / 1;
  max-width: 100%;
}

.project-info {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0.5rem;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
}
.project-info div {
  background-color: unset;
}
.expand-txt {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #fff;
}
.visible-p-info {
  opacity: 1;
  transform: translateY(0);
}
.invisible-p-info {
  opacity: 0;
  transform: translateY(5%);
}

.project {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  text-align:  left !important;
  z-index: 3;
  transform-origin: 5rem 0;
}

.v-enter-active, .v-leave-active {
  transition: scale 0.5s ease;
}
.v-enter-from, .v-leave-to {
  scale: 0;
}

.close-project {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

</style>