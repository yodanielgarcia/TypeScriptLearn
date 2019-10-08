var url = 'https://jsonplaceholder.typicode.com/todos';
function api(url) {
    return fetch(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        return data.data;
    });
}
api(url);
