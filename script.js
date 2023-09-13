
const inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function AddTask(){
    if(inputbox.value ===''){
        alert("You must write something");
    }
    else{ 
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value =  " ";
//     savedata();  // save updated data or list
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    savedata();
  }
  else if(ev.target.tagName === "SPAN"){
     ev.target.parentElement.remove();
     savedata();
        }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML); // to save data
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data"); //to display data
}
showdata();