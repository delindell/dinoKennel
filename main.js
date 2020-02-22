const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const singleDinoAddEvents = () =>{
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i = 0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino)
    }
}

const closeSingleViewEvent = () =>{
    printToDom('single-view', '');
    printDinos(dinos);
}

const viewSingleDino = () => {
    let domString = ''
    domString += `<button class="btn btn-outline-dark single-dino" id="close-single-view"><i class="fas fa-window-close"></i></button>`
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString += `<div class="col-4">`
        domString += `<div class="dino-card">`
        domString += `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="image-of-dino">`
        domString += `<div class="card-body">`
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`
        domString += `<p class="card-text">Age:  ${dinoArray[i].age}</p>`
        domString += `<p class="dino-health-score">Health:  ${dinoArray[i].health}</p>`
        domString += `<button class="btn btn-outline-dark single-dino" id="close-single-view"><i class="far fa-eye"></i></button>`
        domString += `</div>`
        domString += `</div>`
        domString += `</div>`
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();    
}

const dinos = [
    {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images.unsplash.com/photo-1560148271-00b5e5850812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
      },
      {
        id: 'dino2',
        name: 'Bill',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images.unsplash.com/photo-1560148271-00b5e5850812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
      },
      {
        id: 'dino3',
        name: 'Bob',
        type: 'T Rex',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 100,
        imageUrl: 'https://images.unsplash.com/photo-1560148271-00b5e5850812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
      }
];

const newDino = (e) => {
    e.preventDefault()
    const brandNewDino = {
        id: `dinos${dinos.length +1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
    }
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
};

const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    printDinos(dinos);
};

init();