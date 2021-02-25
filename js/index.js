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

    let html = (`
        <div class="card">
            <div class="banner">
                <div class="avatar" style="background-image: url(${json.results[0].picture.large})"></div>
            </div>
            <h3>${json.results[0].name.first + " " + json.results[0].name.last}</h3>
            <a>${json.results[0].phone}</a>
            <a>${json.results[0].email}</a>
            <ul>
                <a href=""><i class="fa fa-github" style="font-size:16px"></i></a>
                <a href=""><i class="fa fa-codepen" style="font-size:16px"></i></a>
                <a href=""><i class="fa fa-spotify" style="font-size:16px"></i></a>
            </ul>
        </div>
    `);

    document.getElementById("friend").innerHTML = html;
}