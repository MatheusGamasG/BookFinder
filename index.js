const bookResultContainer = document.querySelector('.books-result__container');
const searchInput = document.querySelector('.search__input');
const buttonInput = document.querySelector('.search__button');
const loadingBar = document.querySelector('.loadingBar');

buttonInput.addEventListener('click', () => {
    validaCards(bookResultContainer.childNodes.length);
    loadingBar.classList.toggle('notVisible');
    let temporaryInput = searchInput.value
    if(temporaryInput.includes(' ')) {
        temporaryInput = temporaryInput.replaceAll(' ', '+');
    }

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${temporaryInput}&maxResults=12&filter=ebooks&orderBy=relevance`)
    .then(
        (response) => response.json())
    .then((data) => {
        loadingBar.classList.toggle('notVisible');        
        let rawItemsArray = data.items;
        let finalItems = rawItemsArray.map((item) => {
        return item.volumeInfo
        })
    
        finalItems.forEach((item) => {
            const card = criaCard(bookResultContainer);
            let book = new Livro(item.title, item.imageLinks.thumbnail, item.authors, item.averageRating, item.pageCount);
            preencheCard(book, card);
        })
    })
})
