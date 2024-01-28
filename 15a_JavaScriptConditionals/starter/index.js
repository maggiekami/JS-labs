let age = 15;

if (age <= 17) {
  console.log("Underage");
} else {
  console.log("18 or over");
}

if (age <= 17) {
  console.log("Underage");
} else if (age >= 18 && age <= 65) {
  console.log("Insurable");
} else {
  console.log("Out of range");
}

age = 10;
if (age <= 17) {
  console.log("Underage");
} else if (age >= 18 && age <= 65) {
  console.log("Insurable");
} else {
  console.log("Out of range");
}

age = 50;
if (age <= 17) {
  console.log("Underage");
} else if (age >= 18 && age <= 65) {
  console.log("Insurable");
} else {
  console.log("Out of range");
}

age = 80;
if (age <= 17) {
  console.log("Underage");
} else if (age >= 18 && age <= 65) {
  console.log("Insurable");
} else {
  console.log("Out of range");
}

let result =
  age <= 17
    ? "Underage"
    : age >= 18 && age <= 65
    ? "Insurable"
    : "Out of range";
console.log(result);
