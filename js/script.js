// Array extraño
const strangeArray = [
  'Zero',
  function () {
    alert('Hola soy una función en un array');
  },
  22,
  null,
  'Go lang',
  undefined,
  'Cobol',
  "I'm programmer",
  -2000,
  'Hello world',
  `One is ${1}`,
  { name: 'Info', lastname: 'last info' },
  () => true,
  function showNumbers() {
    return '1, 2, 3, 4';
  },
  'Another String',
  ['Hola mundo!'],
  'b is a letter',
  'JavaScript',
];

// Función que recibe por parámetro un array y retorna sus elementos String en un array
function filtrarStringsDeArray(array) {
  return array.filter((element) => 'string' === typeof element);
}

// Función que recibe por parámetro un array de String y lo retorna ordenado aflabeticamente
function sortArrayOfStrings(array) {
  return array.sort((a, b) => a.toUpperCase() > b.toUpperCase());
}

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById('list');
  container.innerHTML = '';
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  const sortedStringArray = sortArrayOfStrings(
    filtrarStringsDeArray(strangeArray)
  );
  showList(sortedStringArray);
});
