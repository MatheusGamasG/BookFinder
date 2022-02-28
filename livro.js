class Livro {
    constructor(title, cover, authors, rating, pages) {
        if (cover == undefined) {
            this.cover = 'Cover not available'
        } else {
            this.cover = cover;
        }
        
        this.title = title;

        if (authors == undefined) {
            this.authors = 'Anonymous author'
        } else {
            this.authors = authors[0];
        }

        if(rating == undefined) {
            this.rating = 'Rating is not available'
        } else {
            this.rating = rating;
        }

        if(pages == undefined) {
            this.pages = 'Pages not available'
        } else {
            this.pages = pages;
        }
    }
}