 // icone come da milestone 1
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
  // colori come da milestone 2
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
  //aggiungiamo dei colori come da milestone 2
print(newArray, container);

  //inseriamo le icone nel container come da milestone 2
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



  //estrapoliamo i tipi di icone



  const select = $("#type");

  select.append('<option value="animals">Animali</option>');
  select.append('<option value="food">Pietanze</option>');
  select.append('<option value="user">Utenti</option>');

  const typeSelector = document.getElementById('type');

  typeSelector.addEventListener('change', event => {

    const choice = $('#type option:selected').val();

    const ArrayFilter = newArray.filter(icon => icon.family == choice);


    container.innerHTML = '';

    print (ArrayFilter, container, );
  });


  //aggiungiamo i tipi alla select

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/
