<script setup>
import Tag from "../components/Tag.vue"
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js';
import { onIntersect } from "../composables/onIntersect";

const observer = ref({});
const scrollRef = ref({});
const header = ref(null);
const visibility = ref('invisible');
const lineState = ref('header-line-hide');

// This is the callback being called on intersection
const onEnter = () => {
  new Typed(header.value, {
    strings: ["About Me"],
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
      <h3>Who am I?</h3>
      <p class="point-form">I'm currently a <span class="highlight">Computer Science</span> student at Concordia University set to graduate in <span class="highlight">December 2023</span>.</p>
      <p class="point-form">Completed a 3 year DEC in <span class="highlight">Engineering Physics Technology</span> at John Abbott College.</p>
      <p class="point-form">I have recently began taking contract projects as a <span class="highlight">freelance web developer</span>.</p>
      <p class="point-form">I also have experience as an electronics technician, primarily working on automating test benches.</p>
      <h3>What am I looking for?</h3>
      <p class="point-form">I'm currently looking for an opportunity to complete an <span class="highlight">internship</span> in the field before graduating.</p>
      <h3>What am I good at?</h3>
      <p class="point-form">Most experienced with:</p>
      <div class="tags">
        <Tag name="Java"/>
        <Tag name="C++"/>
        <Tag name="Visual Basic .NET"/>
        <Tag name="JavaScript"/>
        <Tag name="Vue.js"/>
        <Tag name="WordPress"/>
        <Tag name="Liquid"/>
        <Tag name="AWS"/>
      </div>
      <p class="point-form">Some experience with:</p>
      <div class="tags">
        <Tag name="PHP"/>
        <Tag name="SQL"/>
        <Tag name="C"/>
        <Tag name="C#"/>
        <Tag name="GIT"/>
      </div>   
    </div>
  </div>
</template>

<style scoped>
  
</style>