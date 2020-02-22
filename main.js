const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString += `<div class="col-4">`
        domString += `<div class="dino-card">`
        domString += `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="image-of-dino">`
        domString += `<div class="card-body">`
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`
        domString += `<p class="card-text">${dinoArray[i].age}</p>`
        domString += `<p class="dino-health-score">Health:  ${dinoArray[i].health}</p>`
        domString += `</div>`
        domString += `</div>`
        domString += `</div>`
    }
    printToDom('kennel', domString);
}

const dinos = [];

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
};

init();