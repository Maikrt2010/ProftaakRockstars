var reviews = [];
var filled_img_url = "img/filled_star.png";
var empty_img_url = "img/empty_star.png";

$(window).load(async function() {
    var response = await ReviewsApi('1');
    reviews = response.reviews
    calculateRating();
    var previousIndex = 0;
    $("img").click(async function(element) {

        // Initalizes variables to use;
        const allStars = [];
        var clickedIndex = null;
        const totalStars = document.getElementById("stars").children.length;

        // Puts all elements in a array;
        for (var i = 0; i < document.getElementById("stars").children.length; i++) allStars.push(document.getElementById("stars").children[i].id);

        // Sets id of selected star
        var id = element.target.id;

        // Finds which index from the array of stars was clicked
        allStars.forEach((element, index) => {
            if (element === id) clickedIndex = index;
        })

        // Fill correct amount of stars based on which star was clicked
        if (previousIndex < clickedIndex) {
            for (var i = 0; i < clickedIndex + 1; i++) {
                var currentElement = document.getElementById("stars").children[i];
                currentElement.src = filled_img_url;
                $(`#${currentElement.id}`).animate({
                    height: "35px",
                    width: "35px",
                }, 1000);
                $(`#${currentElement.id}`).css('-webkit-filter', ' drop-shadow(12px 12px 7px rgba(250, 248, 147, 0.7))');
            }
        } else if (previousIndex > clickedIndex) {
            for (var i = clickedIndex + 1; i < totalStars; i++) {
                var currentElement = document.getElementById("stars").children[i];
                currentElement.src = empty_img_url;
                $(`#${currentElement.id}`).animate({
                    height: "30px",
                    width: "30px",
                }, 1000);
                $(`#${currentElement.id}`).css({ '-webkit-filter': 'none', ' drop-shadow': 'none' });
            }
        }
        response = await ReviewsApi("1", clickedIndex + 1);
        reviews = response.reviews;
        previousIndex = clickedIndex;
        calculateRating();
    });
});

function calculateRating() {
    var sum = 0;
    reviews.forEach((element) => {
        sum += element;
    })
    var average = Math.round(sum / reviews.length * 10) / 10;
    document.getElementById('average').innerHTML = `Average rating is ${average}`;
}

async function ReviewsApi(item_id, review) {
    const data = { item_id, review }
    const url = 'http://localhost:5000/reviews'
    var response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    response = response.json();
    return response;
}