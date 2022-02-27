class Livro {
    constructor(title, cover, authors, description, pages) {
        this.title = title;

        if (cover == undefined) {
            this.cover = 'Cover not available'
        } else {
            this.cover = cover;
        }

        if (authors == undefined) {
            this.authors = 'Anonymous author'
        } else {
            this.authors = authors;
        }

        if(description == undefined) {
            this.description = 'Description not available'
        } else {
            this.description = description;
        }

        if(pages == undefined) {
            this.pages = 'Pages not available'
        } else {
            this.pages = pages;
        }
    }
}