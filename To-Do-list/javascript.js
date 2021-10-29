//Elements
const toDoInput = document.querySelector('#to-do-input')  ; 
const btnToDo = document.querySelector('#btnTodo') ; 
const todo = document.querySelector('#listTodo') ; 

//events
btnToDo.addEventListener('click' , todoadd) ;

//function 
function todoadd(event){
    //preventEvenet 
    event.preventDefault();
    // create the global Div 
    div = document.createElement("div") ; 
    div.classList.add("div-item") ; 
    //create li Element
    li = document.createElement("li") ; 
    li.innerText = "hey" ; 
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
    
}