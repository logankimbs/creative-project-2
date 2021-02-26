document.getElementById("randomFriend").addEventListener("click", function(event) {
    const url = "https://randomuser.me/api/?nat=us";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayData(json);
    });
});

document.getElementById("allFriends").addEventListener("click", function(event) {
    const url = "https://randomuser.me/api/?nat=us&results=250";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayData(json);
    });
});

document.getElementById("cats").addEventListener("click", function(event) {
    const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=6";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayCats(json);
    });
});

function displayCats(data) {
    console.log(data);

    let html = `
        <div>
            <h1 class="Display-3">😹 Cat facts</h1>
            <p>Share a cool cat fact with someone random to make a new friend.</p>
            <div class="row">
    `;

    for (let i = 0; i < data.length; i++) {
        html += `
                <div class="col-sm-6" style="margin-bottom: 20px;">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Did you know...</h5>
                            <p class="card-text">${data[i].text}</p>
                        </div>
                    </div>
                </div>
        `;
    }

    html += `
            </div>
        </div>
    `;

    document.getElementById("friends").innerHTML = html;
}

function displayData(data) {
    console.log(data);
    let html = `
    <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>`;

    for (let i = 0; i < data.results.length; i++) {
        html += `
            <tr>
                <td>${data.results[i].name.first + " " + data.results[i].name.last}</td>
                <td>${data.results[i].email}</td>
                <td>${data.results[i].phone}</td>
            </tr>`;
    }

    html += `
        </tbody>
    </table>
    `;

    document.getElementById("friends").innerHTML = html;
}