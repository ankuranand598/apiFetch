/*fetch('https://reqres.in/api/users?page=2')
//how to handle the promise,
    .then(function (res) {
        res.json().then(function (data) {
          console.log('data:', data);  
        })
    })
    .catch(function (err) {
     console.log('err:', err);
})*/
async function makeRequest() {
    try {
        let res = await fetch("https://reqres.in/api/users?page=2");
        let data = await res.json()
        console.log('data:', data);
    }
    catch (err) {
         console.log('err:', err);
    }
}
makeRequest()