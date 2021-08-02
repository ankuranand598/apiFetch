//https://restcountries.eu/rest/v2/all
async function getCountry() {
    try {
        let res = await fetch("https://restcountries.eu/rest/v2/all");
        let data = await res.json()
        data.forEach(({name,languages:[{name:lang}]}) => {
            console.log(name,lang);
         })
    }
    catch (err) {
         console.log('err:', err);
    }
}
getCountry()