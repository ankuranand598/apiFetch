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
makeRequest()
async function getWethers() {
    let city = document.getElementById('city').value;
    try { 
    let wether = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7462389c6e671076d5c5c0e5e252cf4
`)
        let data = await wether.json();
    console.log(city, Math.round(data.main.temp - 273))
}
catch (err) {
    console.log('err:',err)
}
}*/
function checkString(str,c) {
    let count = 0;
    let max = 0;
    let obj = {}
    for (let i = 0; i < str.length; i++){
        
    }
}
let s = 'zoomsessionmooz';
let obj = {};
let c=0
for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == undefined) {
        obj[s[i]] = 1;
    } else {
        obj[s[i]]++;
     }
}
for (key in obj) {
    
    c++
}
let res=''
console.log(c)
for (let j = 0; j < s.length; j++) {
    res = ' ';
    for (let k = j; k < s.length; k++) {
        res += s[k]
        //console.log(res.length)

        
    }
     
}
