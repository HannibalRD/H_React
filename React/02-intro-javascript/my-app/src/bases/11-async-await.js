
const getImage = async() => {

    try{
        const apiKey = 'P2ig6Lfu7jPDGWz7gweON7GtFIDqgDml'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json() 
    console.log(data)
    const {url}= data.images.original
    const img = document.createElement('img')
        img.src = url;
    
        document.body.append( img)

    }
    catch(error){
        console.log(error)
    }
    
}


getImage()

// const apiKey = 'P2ig6Lfu7jPDGWz7gweON7GtFIDqgDml'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
// .then (resp => resp.json())
// .then( ({data})=> {
//     const {url}= data.images.original

//     const img = document.createElement('img')
//     img.src = url;

//     document.body.append( img)
// })
// .catch(console.warn);