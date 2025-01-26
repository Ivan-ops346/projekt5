import { defineStore } from "pinia";

export const useCounterStore = defineStore("Dodaj broj vojnika", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count+=10000;
    },
    decrement() {
      if (this.count > 0) this.count-=1000;
    },
    happy() {
      if (this.count >= 113000 && this.count <= 150000) this.message = "bravo, pobijedio bi Napoleona";
      else if (this.count < 113000) this.message = "s ovim brojem ne bi pobijedio Napoleona";
      else if (this.count > 150000 ) { this.message = "pobijedio bi, ali to je ipak malo pretjeran broj vojnika za to doba, treba ostat realan!";
      }
    },
  },
});