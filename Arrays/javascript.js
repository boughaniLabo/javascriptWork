//heighr order function 

/// MAP FUCNTION 
const names = ['boughni','demmouche','hakim','zinou' , 'boughani']
//this fucntion had a return 
namesUpper = names.map(function(video){
    return video.toUpperCase() ; 
})
console.log(namesUpper) ; 
//find function 

searchName = names.find(function(name){
    return  name.includes("bou") ; 
})
console.log(searchName) ; 
//filter fucntion 
films  = [
    {title :"world in corona"   , rating : 10} ,
    {title : "how to save world ", rating : 9} , 
    {title : "why" , rating : 10}
]
costumeSearch = films.filter(function(film){
    return film.title.length >10  ; 
}) ; 
console.log(costumeSearch) ; 
//Every and Some 
costumeSearch = films.some(function(film){
    return film.title.length >10  ; 
}) ; 

costumeSearch = films.every(function(film){
    return film.title.length >10  ; 
}) ; 
//sort array method 
//try derectly with object 
films.sort((a,b)=>a.rating-b.rating ) ; 
console.log(films) ; 
//inverse the b and a will sort the array from the biggest to lower 