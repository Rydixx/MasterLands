// ### Basic Function
function sayHi(name, age) {
  console.log(`hi nama gua ${name}, gua berumur ${age}`);
}

sayHi("fahrul", 19);

function matematika(angkaPertama, angkaKedua) {
  const hasil = angkaPertama + angkaKedua;
  console.log(`hasil dari ${angkaPertama} + ${angkaKedua} = ${hasil}`);
}

matematika(10, 100);

// ### Arrow Function
const arrowFunction = (nama) => {
  console.log("hello world " + nama);
};

arrowFunction("Fahrul");
arrowFunction()(
  // LIVE FUNCTION
  () => console.log("hello from live arrow fnc")
)();
