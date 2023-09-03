const apiKey = 'P2ig6Lfu7jPDGWz7gweON7GtFIDqgDml'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then (resp => resp.json())
.then( ({data})=> {
    const {url}= data.images.original

    const img = document.createElement('img')
    img.src = url;

    document.body.append( img)
})
.catch(console.warn);

