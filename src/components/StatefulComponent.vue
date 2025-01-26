<template>
    <div>
      <h2>Brojimo Vojnike s Pinia</h2>
      <p>Broj vojnika koji će pobijditi Napoleona: {{ counter.count }}</p>
      <button @click="increment">Povecaj za 10 000</button>
      <button @click="decrement">Smanji za 1000</button>
      <button @click="happy">Happy?</button>
      <p>{{ counter.message }}</p>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from "../stores/counter";
  
  export default {
    name: "StatefulComponent",
    setup() {
      const counter = useCounterStore();
  
      return {
        counter,
        increment: counter.increment,
        decrement: counter.decrement,
        happy: counter.happy,
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #369870;
  }
  </style>
  