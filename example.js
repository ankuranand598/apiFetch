/*fetch('https://reqres.in/api/users?page=2')
//how to handle the promise,
    .then(function (res) {
        res.json().then(function (data) {
          console.log('data:', data);  
        })
    })
    .catch(function (err) {
     console.log('err:', err);
})
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
makeRequest()*/
async function getWethers() {
    let city = document.getElementById('city').value;
    try { 
    let wether = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7462389c6e671076d5c5c0e5e252cf4`)
    let data = await wether.json();
    console.log(city, Math.round(data.main.temp-273))
}
catch (err) {
    console.log('err:',err)
}
}
