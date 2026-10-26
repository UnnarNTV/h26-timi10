let matsedill = [
  { id: 1, nafn: "Unnar1", verd: 123, vegan: true, flokkur: "Aðalréttur" },
  { id: 2, nafn: "Unnar2", verd: 223, vegan: false, flokkur: "Eftirréttur" },
  { id: 3, nafn: "Unnar3", verd: 423, vegan: true, flokkur: "Aðalréttur" },
  { id: 4, nafn: "Unnar4", verd: 523, vegan: true, flokkur: "Aðalréttur" },
  { id: 5, nafn: "Unnar5", verd: 623, vegan: true, flokkur: "Aðalréttur" },
];

console.log(matsedill.length);
console.log(matsedill[0]);
console.log(matsedill[0].nafn);
console.log(matsedill[matsedill.length - 1].nafn);

for (const rettur of matsedill) {
  console.log(`${rettur.nafn} - verd ${rettur.verd} kr.`);
}

// NB
console.table(matsedill);

const nofn = matsedill.map((rettur) => rettur.nafn);
console.log(nofn);

const veganRettir = matsedill.filter((r) => r.vegan);
console.log(veganRettir);

const veganRettirSum = matsedill
  .filter((r) => r.vegan)
  .reduce((sum, r) => sum + r.verd, 0);
console.log(veganRettirSum);

const plokkari = matsedill.find((r) => r.id === 3);
console.log(plokkari);

const sveppasalat = matsedill.find((r) => r.nafn === "Unnar4");
console.log(sveppasalat);

const pontun = [matsedill[0], matsedill[2], matsedill[4]];
const samtals = pontun.reduce((sum, rettur) => sum + rettur.verd, 0);
console.log(pontun);
console.log("Samtals: ", samtals);

const eftirVerdi = [...matsedill].sort((a, b) => a.verd - b.verd); // Betra, búum til afrit af matseðli sem við sortum
//const eftirVerdi = matsedill.sort((a, b) => a.verd - b.verd); // Destructive method, breitir matseðli!!! VERY BAD
console.log("Sortað", eftirVerdi);

const erVegan = matsedill.some((r) => r.vegan);
const erAlltVegan = matsedill.every((r) => r.vegan);
console.log("Er vegan", erVegan);
console.log("Er allt vegan", erAlltVegan);

const veganNofn = matsedill
  .filter((r) => r.vegan)
  .sort((a, b) => a.verd - b.verd) // highest first is a + b
  .map((r) => r.nafn);
console.log("Vegan nöfn: ", veganNofn);
