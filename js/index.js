document.getElementById("generateOneFriend").addEventListener("click", function(event) {
    const url = "https://randomuser.me/api/?nat=us";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayData(json);
    });
});

function displayData(json) {
    console.log(json);
}