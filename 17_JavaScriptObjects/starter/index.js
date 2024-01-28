let darthVader = {
  allegiance: "Empire",
  weapon: "lightsabre",
  sith: true,
};

console.log("Darth Vader's allegiance: " + darthVader.allegiance);
console.log("Darth Vader's weapon: " + darthVader.weapon);
console.log("Is Darth Vader a Sith? " + darthVader.sith);
console.log("Value of Jedi from Darth Vader: " + darthVader.Jedi);
console.log(
  "Number of properties Darth Vader has: " + Object.keys(darthVader).length
);

darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];

console.log("Number of children: " + darthVader.children);
console.log("First child's name: " + darthVader.childNames[0]);

for (let key in darthVader) {
  console.log(`${key}: ${darthVader[key]}`);
}

darthVader.allegiance = "The light side";
console.log("Darth Vader after changing allegiance: ", darthVader);

delete darthVader.children;
console.log("Darth Vader after deleting children: ", darthVader);

let { allegiance, weapon, sith, childNames } = darthVader;

console.log("Allegiance: ", allegiance);
console.log("Weapon: ", weapon);
console.log("Sith: ", sith);
console.log("Child Names: ", childNames);

darthVader = {};
console.log(darthVader);
