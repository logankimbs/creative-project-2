document.getElementById("randomFriend").addEventListener("click", function(event) {
    const url = "https://randomuser.me/api/?nat=us";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayData(json);
    });
});

document.getElementById("allFriends").addEventListener("click", function(event) {
    const url = "https://randomuser.me/api/?nat=us&results=500";

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        displayData(json);
    });
});

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
    </table>`;

    document.getElementById("friends").innerHTML = html;
}