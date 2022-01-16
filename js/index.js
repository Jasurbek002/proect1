var h1element = document.createElement('h1')
h1element.textContent="World films site"
h1element.style.margin="0px 0px"
h1element.style.color="white"
h1element.style.justifyContent="centre"
h1element.style.width="100%"
h1element.style.background="blue"
h1element.style.color="white"


var divelement = document.createElement('div')
divelement.setAttribute('class', 'container')
divelement.style.background="#EDF3F8"

var ulelement = document.createElement('ul')
ulelement.setAttribute('class','row')

for(let i = 0;i< movies.length;i++){
   var lielement = document.createElement("li")
   lielement.setAttribute('class','card col-3 ms-5 mt-3')
   lielement.style.background='rgba(14, 135, 132, 1)'
   var h3element = document.createElement('h6')
   var imgelement=document.createElement('img')
   var yearelement=document.createElement('h6')
   var dercelement=document.createElement('p')
   var actelement=document.createElement('p')
   var pElement=document.createElement('p')

   

   imgelement.src=movies[i].imageUrl
   h3element.textContent="Name: " + movies[i].title
   yearelement.textContent="Year:"+ " " +movies[i].year
   dercelement.textContent="Derectors: " + movies[i].director
   actelement.textContent="Actors: " + movies[i].actors
   pElement.textContent="Discirption: " + movies[i].description
console.log(movies[i].title)
for(let j = 0; j < movies[i].genres.length;j++){
    var h5element = document.createElement('h6')
   h5element.textContent ="Ganers: " + movies[i].genres[j]
   
}
lielement.appendChild(imgelement)
lielement.appendChild(h3element)
lielement.appendChild(h5element)
lielement.appendChild(yearelement)
lielement.appendChild(dercelement)
lielement.appendChild(actelement)
lielement.appendChild(pElement)
  ulelement.appendChild(lielement)
}
console.log(ulelement )
divelement.appendChild(h1element)
divelement.appendChild(ulelement)
document.body.appendChild(divelement)