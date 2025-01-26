<template>
    <div>
      <h2>Tako veliku vojsku niti Napoleon nije mogao sam kontrolirati, pa je trebao još nekoliko visokih generala, da mu pomognu</h2>
      <button @click="sendIncrement">Emit Increment Event</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChildComponent",
    methods: {
      sendIncrement() {
        this.$emit("increment");
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #369870;
  }
  </style>