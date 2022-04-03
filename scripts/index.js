//main countdown

document.addEventListener('DOMContentLoaded', () => {
    var timeOfHackathon = new Date(2022, 3, 23, 10, 0) / 1000;
    // var flipdown = new FlipDown(timeOfHackathon, 'countdown-main').start();
    new FlipDown(timeOfHackathon, 'countdown-main', {
        theme: 'light'
    }).start();
});


// TIMELINE JAVASCRIPT

let timeline = document.getElementById("timeline");
let timeline2 = document.getElementById("timeline2");


let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");



day1.addEventListener("click", function() {
    if (timeline.style.display === "none") {
        timeline.style.display = "block";
        timeline2.style.display = "none";
        day1.classList.add("active");
        day2.classList.remove("active");
    } else {
        timeline.style.display = "block";
        timeline2.style.display = "none";
        day1.classList.add("active");
        day2.classList.remove("active");
    }
});
day2.addEventListener("click", function() {
    if (timeline2.style.display === "none") {
        timeline2.style.display = "block";
        timeline.style.display = "none";
        day2.classList.add("active");
        day1.classList.remove("active");
    } else {
        timeline2.style.display = "block";
        timeline.style.display = "none";
        day2.classList.add("active");
        day1.classList.remove("active");
    }
});

// FAQ JAVASCRIPT

$(document).ready(function() {

    $('.accheader').click(function() {
        $('.acc .accbody').slideUp();
        $(this).next('.accbody').slideDown();
        $('.acc .accheader span').text('+');
        $(this).children('span').text('-');
    });

});