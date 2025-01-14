fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: 'tudos',
        body: 'Szeretem a tejet',
        userId: 1,

    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
