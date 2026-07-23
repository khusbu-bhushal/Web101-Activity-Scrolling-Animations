// Add JavaScript code for your web site here and call it from index.html.
let bg = document.getElementById("bg");
let bird = document.getElementById("bird");
let foliage = document.getElementById("foliage");
let forest = document.getElementById("forest");
let text = document.getElementById("h2");yo

const rates = {
    bg: 0.5,
    bird: 0.5,
    forest: 0.15,
    foliage: 0.15,
    text: 1,
}

const handleScroll = () => {
    let scrollDistance = window.scrollY;
    bg.style.top = scrollDistance * rates.bg + 'px'; //what/how is the bg working here?
    bird.style.left =-scrollDistance * rates.bird + 'px';
    forest.style.top = -scrollDistance * rates.forest + 'px';
    foliage.style.top = scrollDistance * rates.foliage + 'px';
    text.style.top = scrollDistance * rates.text + 'px';
}

window.addEventListener('scroll', handleScroll);
//Why does the page end after the image when the example shows a green bg behind the images?