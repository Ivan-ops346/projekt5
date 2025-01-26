<template>
    <div>
      <h1>Generals</h1>
  
      
      <p>Welcome, {{ rank }}!</p> <!-- Interpolation -->
  
      
      <label for="nameInput">Enter your name:</label> <!-- Two-Way Binding -->
      <input id="nameInput" v-model="name" />
      <p>Nice to meet you General {{ name }} !</p>
  
      
      <button @click="greet">Pozdrav Generalu</button> <!-- Methods -->
      <p>{{ greeting }}</p>
  
      
      <p>Razlika između tvog imena i imena jednog od najvećih vojskovođa u povijesti je: {{ nameLength }} , možda se ne čini kao puno, ali on je ipak Napoleon Bonaparte!</p> <!-- Computed Properties -->


    
    <StatelessComponent 
      title="Pitanje broj 1." 
      description="Bitka kod Waterlooa počela je nedjelju 18. lipnja 1815. kod Waterlooa u današnjoj Belgiji. Carska francuska vojska, pod zapovjedništvom cara Napoleona poražena je od britanske vojske i njenih saveznika pod zapovjedništvom vojvode od Wellingtona, zajedno s pruskom vojskom, pod zapovjedništvom Gebharda von Blüchera"
      task="Tvoj zadatak je ispod postaviti broj vojnika koji misliš da je dovoljan da bi pobijedio jednog od najvećih vojskovođa svih vremena: Napoleona"
    /> <!-- Stateless Component -->

    
    <StatefulComponent /> <!-- Stateful Component -->


    
    <ParentComponent /> <!-- Event Emitting -->
    </div>
  </template>
  
  <script>
    import { data, methods, computed } from "../scripts/helpers.js";
    import StatelessComponent from "../components/StatelessComponent.vue";
    import StatefulComponent from "../components/StatefulComponent.vue";
    import ParentComponent from "../components/ParentComponent.vue";

  
  export default {
    data,
    methods,
    computed,
    mounted() {
      console.log("Generale, sada cemo vidjet jesi li spreman za pravi okrsaj.");
    },
    name : "HomeView",
    components: {
        ParentComponent,
        StatelessComponent,
        StatefulComponent,
  },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #9f0f0f;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  button {
    background-color: #17241e;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #369870;
  }
  
  p {
    color: #333;
    font-size: 1rem;
  }
  </style>
  