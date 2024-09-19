const inputEl = document.getElementById("input-el");
const addEl = document.getElementById("add-el");
const listedEl = document.getElementById("list-el");

addEl.addEventListener('click',()=> {
   if (inputEl.value === '') {
       alert('add your activity')
   } else {
   let listed = document.createElement('li')
   listed.innerHTML = inputEl.value
   listedEl.appendChild(listed)
   let span = document.createElement('span')
   span.innerHTML = "\u00d7"
   listed.appendChild(span)
}
saveData()
    inputEl.value= "";
    
})

listedEl.addEventListener('click',(e)=> {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else {
        e.target.parentElement.remove()
        saveData()
    }
})

 saveData =()=> {
    localStorage.setItem("data",listedEl.innerHTML);
 }

 showTask =()=> {
    listedEl.innerHTML = localStorage.getItem("data")
 }
 showTask()





