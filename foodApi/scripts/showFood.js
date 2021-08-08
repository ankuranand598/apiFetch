async function showMenu(url) {
    try {
        let res = await fetch(url);
        var res1 = await res.json();
        console.log(res1)
    }
    catch(err) {
        console.log('err:',err);
    }
    return res1;
}
function appendFood(food) {
    food.forEach(({product}) => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');
        //img.src = /images/media / meals / llcbn01574260722.jpg / preview
       // p.innerText=www.themealdb.com/api/json/v1/1/search.php?f=a
    })
    
}
export {showMenu,appendFood}