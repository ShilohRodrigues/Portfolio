<script setup>
import ProjectGrid from "./ProjectGrid.vue"
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";

const projectList = [
  {title: "Nurse John Merch Store",
  desc: [
  "Shopify store for my client to sell their merchandise.",
  "Contains custom features created with Liquid, such as a custom checkout with a free shipping counter"
  ], 
  image: "NurseJohn2",
  url: "https://nursejohnn.com/",
  tagList: ['Liquid',
          'Shopify']
  },
  {title: "Sorting Algorithm Visualizer",
  desc: [
  "Visual demonstration of different sorting algorithms.",
  "Programmed using vanilla JavaScript.",
  "Allowed me to experiment with asynchronous functions and data visualization."
  ],
  image: "SortingAlgo",
  url: "https://shilohrodrigues.github.io/SortingAlgorithmVis/",
  tagList: ['JavaScript',
            'Chart.js']
  },
  {title: "Mock Grocery Store",
  desc: [
  "Mock grocery store website with a back-end written in PHP.",
  "Contains user authentication with a users database.",
  "Contains a functional products and orders database.",
  "Has full back-end controls only accessible by an admin user, such as the ability to add or edit products & orders."
  ],
  image: "ConcordiaFoods",
  tagList: ['PHP',
            'SQL']
  },
  {title: "Pong",
  desc: [
  "JavaScript Pong game.",
  "Contains two player settings as well as a computer operated opponent."
  ],
  image: "Pong",
  url: "https://shilohrodrigues.github.io/Pong/",
  tagList: ['JavaScript']
  },
  {title: "Retro Snake",
  desc: [
  "JavaScript Snake game.",
  "Contains different in game settings and a high score counter."
  ],
  image: "Snake1",
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
    strings: ["Projects"],
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
    threshold: 0.3,
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
      <ProjectGrid
        :projects = projectList
        />
    </div>
  </div>
</template>

<style scoped>

</style>