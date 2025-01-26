<template>
  <div>
    <h1>Battle of Waterloo, (June 18, 1815)</h1>
    <p>Generals and their amry sizes.</p>

    <!-- Prikaz podataka -->
    <div v-if="loading">Loading data...</div>
    <ul v-else>
      <li v-for="general in generals" :key="general.id">
        {{ general.id }}: {{ general.name}} is from {{ general.country }} and had {{ general.numberOfSoldiers }} soldiers
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      generals: [], 
      loading: true, 
    };
  },
  async mounted() {
    // Asinkroni dohvat mock podataka
    this.generals = await this.fetchMockData();
    console.log("Sad smo nešto naučili korisnika")
    this.loading = false; // Uklanja indikator učitavanja
  },
  methods: {
    async fetchMockData() {
      // Simuliramo asinkroni poziv koristeći setTimeout unutar Promise
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "Napoleon Bonaparte", country: "France" ,numberOfSoldiers: "72,000"  },
            { id: 2, name: "Gebhard Leberecht von Blücher", country: "Prussia" ,numberOfSoldiers: "45,000" },
            { id: 3, name: "Arthur Wellesley", country: "Great Britain" ,numberOfSoldiers: "68,000" },
          ]);
        }, 2000); // Simulacija 2 sec
      });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  background-color: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>