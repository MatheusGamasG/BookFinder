const title = document.querySelector('.title');
const cover = document.querySelector('.cover');
const authors = document.querySelector('.authors');
const descrip = document.querySelector('.descrip');
const pageNumb = document.querySelector('.pageNumb');

class Livro {
    constructor(title, cover, authors, description, pages) {
        this.title = title;
        if (cover == undefined) {
            this.cover = ''
        } else {
            this.cover = cover;
        }
        this.authors = authors;
        this.description = description;
        this.pages = pages;
    }
}



fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=12')
.then(
    (response) => {
        return response.json();
})
.then((data) => {

    let rawItemsArray = data.items;
    let finalItems = []
    rawItemsArray.forEach(item => {
        finalItems.push(item.volumeInfo)
    })

    const book1 = new Livro(finalItems[0].title, finalItems[0].thumbnail, finalItems[0].authors[0], finalItems[0].description, finalItems[0].pageCount)

    title.textContent = book1.title
    cover.src = book1.cover
    authors.textContent = book1.authors;
    
})

