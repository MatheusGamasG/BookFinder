function criaCard(mainContainer) {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const pAuthors = document.createElement('p');
    const pRating = document.createElement('p');
    const pPageNumber = document.createElement('p');

    article.appendChild(img);
    article.appendChild(div);    
    div.appendChild(h2);
    div.appendChild(pAuthors);
    div.appendChild(pRating);
    div.appendChild(pPageNumber);
    

    mainContainer.appendChild(article);

    article.classList.add('book__card');
    div.classList.add('book__infos');
    h2.classList.add('book__title');
    img.classList.add('book__cover');
    pAuthors.classList.add('book__authors');
    pRating.classList.add('book__rating');
    pPageNumber.classList.add('book__page-number');

    return article;
};

function preencheCard(book, card) {
    let result = Object.values(book).map(values => {
        return values
    })
    result.shift();
    card.childNodes[0].src = book.cover;

    for(let i=0; i < result.length; i++) {
        card.childNodes[1].childNodes[i].innerHTML = result[i];
    }
}

function validaCards(cardsLength) {
    if(cardsLength > 1) {
        const cards = document.querySelectorAll('.book__card');

        for(let i = 0; i < cards.length; i++) {
            cards[i].remove();
        }
    }
};