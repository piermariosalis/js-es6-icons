// Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
const icons = [
  {
    name: "cat",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "crow",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "dog",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "dove",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "dragon",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "horse",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "frog",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "fish",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "pizza-slice",
    prefix: "fas",
    type: "fa",
    family: "food",
  },
  {
    name: "hotdog",
    prefix: "fas",
    type: "fa",
    family: "food",
  },
  {
    name: "bacon",
    prefix: "fas",
    type: "fa",
    family: "food",
  },
  {
    name: "hamburger",
    prefix: "fas",
    type: "fa",
    family: "food",
  },
  {
    name: "user-astronaut",
    prefix: "fas",
    type: "fa",
    family: "user",
  },
  {
    name: "user-ninja",
    prefix: "fas",
    type: "fa",
    family: "user",
  },
  {
    name: "user-secret",
    prefix: "fas",
    type: "fa",
    family: "animals",
  },
  {
    name: "user-shield",
    prefix: "fas",
    type: "fa",
    family: "user",
  }
]
// console.log("iconsList");

  // Semezioniamo il container icons

const container = document.querySelector(".icons")

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

print(icons, container);

function print(array, selector){
  array.forEach(element => {
    const {name, prefix, type} = element;

    selector.innerHTML += `

    <div>
    <i class="${prefix} ${type}-${name}" style="color:blue"></i>
    <div class="title">${name}</div>
  </div>


    `

  });

}



/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
