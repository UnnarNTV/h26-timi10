console.log("Hello world");

let retturNafn = "Stöppuð ýsa með tómatsósu";
let retturVerd = 1990;

console.log(`Réttur dagsins er ${retturNafn} - verð ${retturVerd}`);

let lykill = "nafn";

const rettur = {
  nafn: "Stöppuð ýsa með tómatsósu",
  verd: 1990,
  flokkur: "Aðalréttur",
  vegan: false,
};
console.log(typeof rettur);
console.log(rettur.nafn);
console.log(rettur[lykill]);
rettur.lykill = "lykill";
delete rettur.nafn;
console.log(rettur);

const rettur2 = {
  nafn: "Nautasteik",
  verd: 5990,
  flokkur: "Aðalréttur",
  vegan: false,
  ofnaemi: ["sellerí"],
  naeringagildi: { kcal: 520, protein: 32 },
};

console.log(rettur2.ofnaemi[0]);
console.log(rettur2.naeringagildi.kcal);

// NB Listar af keys og objects
console.log(Object.keys(rettur2));
console.log(Object.keys(rettur2.naeringagildi));
console.log(Object.values(rettur2));

for ([lykill, gildi] of Object.entries(rettur2)) {
  console.log(`${lykill}, ${gildi}`);
}

console.log("vegan" in rettur2);

const matsedill = [
  {
    nafn: "Stöppuð ýsa með tómatsósu",
    verd: 1990,
    flokkur: "Aðalréttur",
    vegan: false,
  },
  {
    nafn: "Nautasteik",
    verd: 1990,
    multiply: function multiply(a, b) {
      return a * b;
    },
    myMap: function myMap(list, func) {
      let temp = [];
      for (item of list) {
        temp.push(func(item));
      }
      return temp;
    },
    flokkur: "Aðalréttur",
    vegan: false,
  },
];

const myList = ["jon", "omar", "kristofer"];
const myList2 = ["10", "20", "30"];

console.log(matsedill[1].nafn);
console.log(rettur2[2]);

console.log(typeof matsedill);
console.log(matsedill[1].multiply(10, 10));
console.log(
  matsedill[1].myMap(myList, (item) => {
    return item + "jaja";
  }),
);

console.log(myList.reverse());

function yell(name) {
  return name.toUpperCase() + "!";
}

console.log(myList.map(yell));
console.log(myList2.map((number) => number * 3));
