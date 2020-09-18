let filterInput = document.getElementById('filterInput').addEventListener('keyup', getJokes)
function getJokes() {
    fetch(`https://type.fit/api/quotes`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.map(function (post, index) {
                output += `<li class="collection-item"><a href="#">jokes ${index} : ${post.text} ${post.author}</a></li>
                <li class="collection-item"> ${post.author}</li>
                `;
            })
            document.querySelector('.collection').innerHTML = output;
        });
}

getJokes();