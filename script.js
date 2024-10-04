// DOM
// Event
// For-each

const button = document.querySelectorAll('.box');
const body = document.querySelector('body');

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1') {
            body.style.backgroundColor = "red"
        }
        if(color.target.id === 'box2') {
            body.style.backgroundColor = "yellow"
        }
        if(color.target.id === 'box3') {
            body.style.backgroundColor = "greenyellow"
        }
        if(color.target.id === 'box4') {
            body.style.backgroundColor = "#f3895F"
        }
        if(color.target.id === 'box5') {
            body.style.backgroundColor = "#37B586"
        }
    })
})