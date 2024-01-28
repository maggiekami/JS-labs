let hanSolo = new Map();

hanSolo.set("vehicle", "Millennium Falcon");
hanSolo.set("bff", "Chewbacca");
hanSolo.set("sweetheart", "Leia");

console.log(hanSolo.size);
console.log(hanSolo.get("vehicle"));
console.log(hanSolo.has("sweetheart"));
console.log(hanSolo.get("isJedi"));

hanSolo.set("son", "Ben");
console.log(hanSolo.get("son"));

for (let [key, value] of hanSolo) {
  console.log(`Han Solo's ${key}: ${value}`);
}

hanSolo.set("bff", "Luke");
console.log(hanSolo.get("bff"));

hanSolo.delete("son");
console.log(hanSolo);

hanSolo.clear();
console.log(hanSolo);
