<script setup>
import ProjectCarousel from "../components/ProjectCarousel.vue"
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";

const projectList = [
  {title: "Sorting Algorithm Visualizer",
  desc: [
  "Visual demonstration of different sorting algorithms.",
  "Programmed using vanilla JavaScript.",
  "Allowed me to experiment with asynchronous functions and data visualization."
  ],
  url: "https://shilohrodrigues.github.io/SortingAlgorithmVis/",
  tagList: ['JavaScript',
            'Chart.js']
  },
  {title: "Pong",
  desc: [
  "JavaScript Pong game.",
  "Contains two player settings as well as a computer operated opponent."
  ],
  url: "https://shilohrodrigues.github.io/Pong/",
  tagList: ['JavaScript']
  },
  {title: "Retro Snake",
  desc: [
  "JavaScript Snake game.",
  "Contains different in game settings and a high score counter."
  ],
  url: "https://shilohrodrigues.github.io/Snake/",
  tagList: ['JavaScript']
  }
];

const observer = ref({});
const scrollRef = ref({});
const header = ref(null);
const visibility = ref('invisible');
const lineState = ref('header-line-hide');

// This is the callback being called on intersection
const onEnter = () => {
  new Typed(header.value, {
    strings: ["For Fun"],
    typeSpeed: 80,
    showCursor: false,
    onComplete: (self) => {
      lineState.value = 'header-line-show'
      visibility.value = 'visible';
    }
  });
};

// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {
  visibility.value = 'invisible'
};
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onIntersect(scrollRef.value, onEnter, onExit, true, {
    threshold: 0.6,
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="scrollRef">
    <div class="h2-container">
      <h2 ref="header"></h2>
      <div class="header-line" :class="lineState"></div>
    </div>   
    <div :class="visibility" class="animate-me">
      <p>These are some projects that I've done over the years alongside my studies. The goals was usually to learn at least one new thing with each one, but above all just to build something that I enjoyed.</p>
      <ProjectCarousel
        :projects = projectList
        />
    </div>
  </div>
</template>

<style scoped>

</style>