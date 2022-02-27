function criaCard(mainContainer) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const pAuthors = document.createElement('p');
    const pDescription = document.createElement('p');
    const pPageNumber = document.createElement('p');

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(pAuthors);
    div.appendChild(pDescription);
    div.appendChild(pPageNumber);

    mainContainer.appendChild(div);

    div.classList.add('book__card');
    h2.classList.add('book__title');
    img.classList.add('book__cover');
    pAuthors.classList.add('book__authors');
    pDescription.classList.add('book__description');
    pPageNumber.classList.add('book__page-number');

    return div;
};

function preencheCard(book, card) {
    let result = Object.values(book).map(key => {
        return key
    })

    for(let i=0; i < card.childNodes.length; i++) {
        if(i == 1) {
            card.childNodes[i].src = result[i];
        } else {
            card.childNodes[i].innerHTML = result[i];
        }
    }
}