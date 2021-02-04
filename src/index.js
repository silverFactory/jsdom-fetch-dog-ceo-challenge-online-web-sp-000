console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    let images = json.message
    for (const image of images){
      let newImage = document.createElement('img')
      newImage.src = image
      document.getElementById('dog-image-container').appendChild(newImage)
    }
  })
})
