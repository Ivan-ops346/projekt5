<template>
    <div>
      <h1>Pitanje broj 2.</h1>
      <p>Što misliš, koliko je francuska imala generala kod Waterloo-a? : {{ count }}</p>
      <ChildComponent @increment="incrementCount" />
      <p>{{ happyMessage }}</p>
      <button @click="checkHappy">Happy</button>
    </div>
  </template>
  
  <script>
  import ChildComponent from "./ChildComponent.vue";
  
  export default {
    name: "ParentComponent",
    components: { ChildComponent },
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      incrementCount() {
        this.count++;
      },
      checkHappy() {
        this.happyMessage = this.count === 5 ? "DA" : "NE";
    },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #100a6d;
  }
  </style>