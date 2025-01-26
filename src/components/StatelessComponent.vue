<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p>{{ task }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatelessComponent",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      task: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #ac7a1d;
    font-size: 1.5rem;
  }
  p {
    color: #666;
    font-size: 1rem;
  }
  </style>