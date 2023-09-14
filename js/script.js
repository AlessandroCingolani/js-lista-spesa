const output = document.getElementById('output');

let counter = 0;

const listaSpesa = [
  'Pane',
  'Pasta',
  'Nutella',
  'Latte',
  'Biscotti',
  'Salumi',
  'Miele',
  'Tisane'
]

output.innerHTML = '';


// while con counter
while (counter < listaSpesa.length){
  const item = listaSpesa[counter];
  output.innerHTML += `<li>${item}</li>`
  counter++;
  console.log(item);
}


// esegui almeno una volta quello che è nel do e ripeti fino a quando la condizione while è vera

// do {
//   const item = listaSpesa[counter];
//   output.innerHTML += `<li>${item}</li>`
//   counter++;
//   console.log(item);
// }while(counter < listaSpesa.length);