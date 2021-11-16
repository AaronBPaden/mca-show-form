"use strict"
class Show {
    constructor() {
        let form = document.getElementById('movieForm');
        let elements = form.elements;
        this.title = elements['inputTitle'].value;
        this.genre = elements['inputGenre'].value;
        this.platform = elements['inputPlatform'].value;
        this.channel = elements['inputChannel'].value;
        this.seasons = elements['inputSeasons'].value;
        this.directors = elements['inputDirectors'].value.split(',');
        this.writers = elements['inputWriters'].value.split(',');
        this.yearBegan = elements['inputYearBegan'].value;
        this.yearEnded = elements['inputYearEnded'].value;
        this.rating = elements['ratingSelector'].value;
        Array.from(elements).forEach(e => e.value = "");
    }
    /*
     * Generate a card with the show data.
     */
    toHTML() {
        let str = '<div class="show-card">';
        str += `<p>Title: ${this.title}</p>`;
        str += `<p>Genre: ${this.genre}</p>`;
        if (this.platform) {
            str += `<p>platform: ${this.platform}</p>`;
        }
        if (this.channel) {
            str += `<p>channel: ${this.channel}</p>`;
        }
        if (this.seasons) {
            str += `<p>channel: ${this.seasons}</p>`;
        }
        str += `<p>Directors: ${this.directors}</p>`;
        str += `<p>Writers: ${this.writers}</p>`;
        str += `<p>Year began: ${this.yearBegan}</p>`;
        if (this.yearEnded) {
            str += `<p>Year ended: ${this.yearEnded}</p>`;
        }
        str += "</div>";
        return str;
    }
}

document.getElementById("movieForm").addEventListener('submit', (event) => {
    event.preventDefault();
    let show = new Show();
    document.getElementById('cardContainer').innerHTML += show.toHTML();
});
