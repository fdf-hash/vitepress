<template>
    <div class="grid-container">
      <div v-for="item in items" :key="item.id" class="grid-item">
        {{ item.text }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        items: [
          { id: 1, text: 'Item 1' },
          { id: 2, text: 'Item 2' },
          { id: 3, text: 'Item 3' },
          { id: 4, text: 'Item 4' },
          { id: 5, text: 'Item 5' },
          { id: 6, text: 'Item 6' },
          { id: 7, text: 'Item 7' },
          { id: 8, text: 'Item 8' },
          { id: 9, text: 'Item 9' },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .grid-item {
    width: 30%;
    height: 100px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
  }
  </style>
  