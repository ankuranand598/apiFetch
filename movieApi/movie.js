let detail = document.getElementById('detail');
async function getMovie() {
    let name = document.getElementById('name').value;
    try {
        let movie = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=14b1e5d7`);
        let data = await movie.json();
        console.log('data',data)
        if (name == data.Title) {
            //console.log('data', data.Title);
            //console.log(data.Poster)
            
            let div = document.createElement('div');
            div.setAttribute('id', 'poster');
            let image = document.createElement('img');
            image.src = data.Poster;
            let title1 = document.createElement('p');
            title1.textContent = `${data.Released}`;
            let title2 = document.createElement('p');
            title2.textContent = `${data.Title}`;
            let title3 = document.createElement('p');
            if (data.imdbRating > 8.5) {
                 title3.textContent = `${data.imdbRating} recommended`;
            } else{
                
            title3.textContent = `${data.imdbRating}`;
        }
            div.append(image,title1, title2,title3);
            detail.append(div);
        } else {
            let image1 = document.createElement('img');
        image1.src = 'https://i.ytimg.com/vi/6kCSVT3r_Qg/hqdefault.jpg';
        detail.append(image1);
         }
        
    }
    catch (err) {
        //console.log('err:',err)
        
    }
}