<script setup>
const props = defineProps({
  name: String
})
</script>

<template>
  <span class="tag">
    {{ name }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  background: var(--tag-color);
  padding: 4px 10px;
  border-radius: 50px;
  font-size: 11px;
  margin-right: 6px;
  font-weight: 500;
  white-space: nowrap;
  margin: 0.2rem 0.2rem 0.2rem 0;
  color: #fff;
}
    
</style>