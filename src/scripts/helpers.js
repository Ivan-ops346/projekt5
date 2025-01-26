export const data = () => ({
    rank: "General",
    name: "",
    greeting: "",
  });
  
  export const methods = {
    greet() {
      this.greeting = `Bok, Generale ${this.name || "guest"}! Dobrodošao u jendu od svojih najvećih iskušenja do sada!`;
    },
  };
  
  export const computed = {
    nameLength() {
      return this.name.length - "NapoleonBonaparte".length;
    },
  };