export const getArt = (criterio:String)=>{

    const apiKey = 'e43f204920dc4a98ada473da8e42ff2f';
    const url = `https://api.artsearch.io/artworks?query=${criterio}&number=3`;
    
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

}






