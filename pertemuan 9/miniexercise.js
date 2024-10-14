let countries = [
  "Indonesia",
  "Malaysia",
  "Russia",
  "Tunisia",
  "Austria",
  "Australia",
  "Somalia",
  "Mongolia",
  "Colombia",
];

let indexIndonesia = countries.findIndex((country) => country === "Indonesia");

let endsWithSia = countries.filter((country) => country.endsWith("sia"));

let sevenCharacterCountries = countries.filter(
  (country) => country.length === 7
);

// Menampilkan hasil
console.log("Index of Indonesia:", indexIndonesia);
console.log("negara dengan nama 'sia':", endsWithSia);
console.log("negara dengan  7 characters:", sevenCharacterCountries);
