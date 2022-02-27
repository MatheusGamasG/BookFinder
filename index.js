const bookResultContainer = document.querySelector('.books-result__container');

fetch('https://www.googleapis.com/books/v1/volumes?q=Harry+potter&maxResults=12&filter=ebooks')
.then(
    (response) => {
        return response.json();
})
.then((data) => {
    let rawItemsArray = data.items;
    let finalItems = rawItemsArray.map((item) => {
        return item.volumeInfo
    })
    console.log(finalItems)

    finalItems.forEach((item) => {
        const card = criaCard(bookResultContainer);
        let book = new Livro(item.title, item.imageLinks.thumbnail, item.authors, item.description, item.pageCount);
        preencheCard(book, card);
    })
})

