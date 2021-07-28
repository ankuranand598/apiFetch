fetch('https://reqres.in/api/users?page=2')
//how to handle the promise,
    .then(function (res) {
        console.log(res.json());
    })
    .catch(function (err) {
     console.log('err:', err);
})