
  // Qui le icone che abbiamo definito nella milestone 1

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


const container = document.querySelector(".icons")

// print(icons, container);



// definiamo dei colori per le icone (blue, orange, purple)


//aggiungiamo dei colori usando una funzione

  const newArray = icons.map(element => {
    if(element.family === "animals") {
      var color = "blue";
      }else if (element.family ==="food") {
        var color = "red";
      } else {
        var color = "green";
      }

      let addColor = {...element, color: color};

      return addColor

  });

//  inseriamo le icone colorate nel container

print(newArray, container);

function print(array, selector){
  array.forEach(element => {
    const {name, prefix, type, color} = element;

    selector.innerHTML += `

    <div>
    <i class="${prefix} ${type}-${name}" style="color:${color}"></i>
    <div class="title">${name}</div>
  </div>


    `

  });

}












/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
