const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 100,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
      {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
      },
  ]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const printDinos = () => {

}

const newDino = (e) => {
    e.preventDefault()
    console.log('click')
    dinoName = document.getElementById('dino-name').value;
    console.log(dinoName)
    dinos.name.push(dinoName);
    console.log(dinos)
    dinoAge = document.getElementById('dino-age').value;
    dinos.age.push(dinoAge)
    document.getElementsByClassName('card-body').value = '';
    console.log(dinos);
}




const event = () => {
    document.getElementById('create-dino-btn').addEventListener('click', newDino);
}

const init = (function (){
    event();
});

init();

