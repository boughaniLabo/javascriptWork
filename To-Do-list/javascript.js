//Elements
const toDoInput = document.querySelector('#to-do-input')  ; 
const btnToDo = document.querySelector('#btnTodo') ; 
const todo = document.querySelector('#listTodo') ; 
const filter = document.querySelector(".filter-todo") ; 

//events
btnToDo.addEventListener('click' , todoadd) ;
todo.addEventListener("click" , deleteCheck) ; 
filter.addEventListener('click' , filters) ; 
window.addEventListener('DOMContentLoaded', listFromLocal ) ;
//function 
function todoadd(event){
    //preventEvenet 
    event.preventDefault();
    //check the input values 
    if(toDoInput.value.length === 0){
        return 0 ;
    }
    // create the global Div 
    div = document.createElement("div") ; 
    div.classList.add("div-item") ; 
    //create li Element
    li = document.createElement("li") ; 
    li.innerText = toDoInput.value ; 
    //push element to local storage 
    addToLocalStorage(toDoInput.value ) ; 
    //append li to the div 
    div.append(li) ; 
    //creeate ckeck btn 
    checkBtn = document.createElement('button') ; 
    checkBtn.classList.add('checkbtn') ; 
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    div.append(checkBtn) ; 
    //create trash button 
    trashBtn = document.createElement('button') ; 
    trashBtn.classList.add('trashBtn') ; 
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    div.append(trashBtn) ; 
    //Append the element created to list ul 
    todo.append(div) ; 
    //Input 
    toDoInput.value = ""
    
}
function deleteCheck(event){
    
    if(event.target.classList[0]==="trashBtn"){
        const parent = event.target.parentElement ; 
        parent.classList.add("fall") ; 
        deleteItemLocal(parent) ; 
        parent.addEventListener("transitionend" , ()=>{
            parent.remove() ; 
        })
    }
    if(event.target.classList[0]==="checkbtn"){
        const parent = event.target.parentElement ; 
        parent.classList.toggle("compelete") ; 
    }
}
function filters(event){
    console.log(todo.childNodes)
   switch(event.target.value){
    case "all" :    
        todo.childNodes.forEach(element => {
      
         element.style.display = "flex" ; 
       });
       break ; 
    case "completed" : 
       todo.childNodes.forEach(element => {
           if(element.classList.contains("compelete")){
            element.style.display = "flex" ; 
           }else{
            element.style.display = "none" ; 
           }
       });
       break ; 
    case "uncompleted" :
        todo.childNodes.forEach(element => {
            if(!element.classList.contains("compelete")){
             element.style.display = "flex" ; 
            }else{
             element.style.display = "none" ; 
            }
        });
        break ; 
   } 
}
function addToLocalStorage(item){
    let todos ; 
    if(localStorage.getItem("todos")=== null ){
        todos = []; 
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(item) ; 
    localStorage.setItem("todos" , JSON.stringify(todos)) ; 
}
function listFromLocal(){
    //this function will help us to add element to the the dom after reload 
    let todos ; 
    if(localStorage.getItem("todos")=== null ){
        todos = []; 
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    
    todos.forEach(function(item){
      
        // create the global Div 
        div = document.createElement("div") ; 
        div.classList.add("div-item") ; 
        //create li Element
        li = document.createElement("li") ; 
        li.innerText = item ; 
        //push element to local storage 
        
        //append li to the div 
        div.append(li) ; 
        //creeate ckeck btn 
        checkBtn = document.createElement('button') ; 
        checkBtn.classList.add('checkbtn') ; 
        checkBtn.innerHTML = '<i class="fas fa-check"></i>'
        div.append(checkBtn) ; 
        //create trash button 
        trashBtn = document.createElement('button') ; 
        trashBtn.classList.add('trashBtn') ; 
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
        div.append(trashBtn) ; 
        //Append the element created to list ul 
        todo.append(div) ; 
    })

}
function deleteItemLocal(item){
    //this function will delete element from local storage 
    let todos ; 
    if(localStorage.getItem("todos")=== null ){
        todos = []; 
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.splice(todos.indexOf(item.childNodes[0].innerText), 1) ; 
    localStorage.setItem("todos" , JSON.stringify(todos));
}